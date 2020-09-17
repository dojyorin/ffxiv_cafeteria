<template>
<v-container fluid>
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
        async setCafes(ctx){
            this.cafes.splice(0);
            for(const cafe of (await $httpGet("./data/cafes.json", "json")).filter(({datacenter})=> datacenter.toLowerCase() === ctx)){
                this.cafes.push(cafe);
            }
        }
    },

    mounted(){
        this.setCafes(this.$route.params.datacenter);
    },

    beforeRouteUpdate({params}, _, next){
        this.setCafes(params.datacenter);
        next();
    }
};
</script>