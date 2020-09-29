<template>
<v-container fluid>
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
        "vue-thumbnail": ()=> $vueLoader("./app/components/cards/thumbnail.vue")
    },

    data(){
        return {
            houses: []
        };
    },

    methods: {
        async setHouses(ctx){
            this.houses.splice(0);
            for(const house of (await $httpGet("./data/houses.json", "json")).filter(({datacenter})=> datacenter.toLowerCase() === ctx)){
                this.houses.push(house);
            }
        }
    },

    mounted(){
        this.setHouses(this.$route.params.datacenter);
    },

    beforeRouteUpdate({params}, _, next){
        this.setHouses(params.datacenter);
        next();
    }
};
</script>