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
                    <v-text-field clearable type="search" prepend-icon="mdi-database-search" label="検索ワード" @keydown.enter="({target})=> $router.push(`/search?words=${target.value}`)"></v-text-field>
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
            houses: []
        };
    },

    methods: {
        async searchHouses(query){
            this.houses.splice(0);

            const hits = (await $httpGet("./data/houses.json", "json")).filter((house)=>{
                const keys = [
                    "name",
                    "type",
                    "datacenter",
                    "world",
                    "address",
                    "owner",
                    "hashtag",
                    "comment"
                ];

                return keys.some(key => new RegExp(query || null, "i").test(house[key]));
            });

            for(const house of hits){
                this.houses.push(house);
            }
        }
    },

    mounted(){
        this.searchHouses(this.$route.query.words);
    },

    beforeRouteUpdate({query}, _, next){
        this.searchHouses(query.words);
        next();
    }
};
</script>