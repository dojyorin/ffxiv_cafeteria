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
        "vue-thumbnail": ()=> $vueLoader("./application/components/cards/thumbnail.vue")
    },

    data(){
        return {
            houses: []
        };
    },

    methods: {
        async setHouses(ctx){
            this.houses.splice(0);

            const houses = await $httpGet("./data/houses.json", "json");
            const filter = houses.filter(({datacenter})=> datacenter.toLowerCase() === ctx);

            for(const house of filter){
                this.houses.push(house);
            }
        }
    },

    async mounted(){
        await this.setHouses(this.$route.params.datacenter);
    },

    async beforeRouteUpdate({params}, _, next){
        await this.setHouses(params.datacenter);
        next();
    }
};
</script>