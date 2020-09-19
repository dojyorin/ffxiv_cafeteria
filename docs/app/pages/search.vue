<template>
<v-container fluid>
    <v-row dense justify="center">
        <v-col cols sm="8" md="6">
            <v-card>
                <v-card-title>検索</v-card-title>

                <v-card-text>
                    <v-text-field clearable type="search" prepend-icon="mdi-database-search" label="検索ワード" @keydown.enter="({target})=> $router.push(`/search?words=${target.value}`)"></v-text-field>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

    <v-subheader>検索結果: {{cafes.length}} 件</v-subheader>

    <v-row dense>
        <template v-for="(cafe, i) in cafes">
            <v-col cols sm="6" md="4" :key="i">
                <vue-thumbnail :cafe="cafe"></vue-thumbnail>
            </v-col>
        </template>
    </v-row>
</v-container>
</template>

<script>
return {
    components: {
        "vue-thumbnail": ()=> $vueLoader("./app/components/cards/thumbnail.vue")
    },

    data(){
        return {
            cafes: []
        };
    },

    methods: {
        async searchCafes(query){
            this.cafes.splice(0);

            const cafes = (await $httpGet("./data/cafes.json", "json")).filter((cafe)=>{
                const keys = [
                    "name",
                    "world",
                    "address",
                    "owner",
                    "hashtag",
                    "comment"
                ];

                return keys.some(key => new RegExp(query || null, "i").test(cafe[key]));
            });

            for(const cafe of cafes){
                this.cafes.push(cafe);
            }
        }
    },

    mounted(){
        this.searchCafes(this.$route.query.words);
    },

    beforeRouteUpdate({query}, _, next){
        this.searchCafes(query.words);
        next();
    }
};
</script>