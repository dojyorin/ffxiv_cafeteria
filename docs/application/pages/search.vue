<template>
<v-container fluid>
    <v-row dense justify="center">
        <v-col cols sm="8" md="6">
            <v-card>
                <v-card-title>検索</v-card-title>

                <v-card-text class="pb-0">
                    ワールド名やエリア名を入力してみましょう。
                </v-card-text>

                <v-card-text>
                    <v-text-field clearable type="search" prepend-icon="mdi-database-search" label="検索ワード" v-model="query" @keydown.enter="$router.push(`/search?words=${query}`)"></v-text-field>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

    <v-subheader>検索結果: {{houses.length}} 件</v-subheader>

    <v-row dense>
        <template v-for="(house, i) in houses">
            <v-col cols sm="6" md="4" :key="i">
                <vue-thumbnail :house="house"></vue-thumbnail>
            </v-col>
        </template>
    </v-row>
</v-container>
</template>

<script>
return {
    components: {
        "vue-thumbnail": ()=> $vueLoader("./application/components/cards/thumbnail.vue")
    },

    data(){
        return {
            query: "",
            houses: []
        };
    },

    methods: {
        async searchHouses(){
            this.houses.splice(0);

            const houses = await $httpGet("./data/houses.json", "json");
            const filter = houses.filter((house)=>{
                return [
                    "name",
                    "type",
                    "datacenter",
                    "world",
                    "address",
                    "owner",
                    "hashtag",
                    "comment"
                ].some(key => new RegExp(this.query || null, "i").test(house[key]));
            });

            for(const house of filter){
                this.houses.push(house);
            }
        }
    },

    async mounted(){
        this.query = this.$route.query.words;
        await this.searchHouses();
    },

    async beforeRouteUpdate({query}, _, next){
        this.query = query.words;
        await this.searchHouses();
        next();
    }
};
</script>