<template>
<v-app>
    <v-app-bar app dark color="blue" :height="52">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title class="ml-3 px-1" v-ripple @click="$router.push('/')">FFXIV Cafeteria</v-toolbar-title>

        <v-spacer></v-spacer>
        <vue-header :contents="pages"></vue-header>
    </v-app-bar>

    <v-navigation-drawer app temporary color="rgba(230, 230, 230, 0.9)" v-model="drawer">
        <v-toolbar dark absolute color="blue" width="100%" :height="$vuetify.application.top">
            <v-toolbar-title>Menu</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon @click="drawer = false">
                <v-icon large>mdi-close</v-icon>
            </v-btn>
        </v-toolbar>

        <vue-drawer :style="`padding-top:${$vuetify.application.top}px!important;`" :contents="pages"></vue-drawer>

        <template #append>
            <v-btn text tile block href="https://github.com/dojyorin/ffxiv_cafeteria" target="_blank" rel="noopener">
                <v-icon left>mdi-github</v-icon>
                <span>GitHub</span>
            </v-btn>

            <v-card flat tile color="transparent">
                <v-card-text class="pa-1">
                    Copyright (C) SQUARE ENIX CO., LTD.
                    <br>
                    All Rights Reserved.
                </v-card-text>
            </v-card>
        </template>
    </v-navigation-drawer>

    <v-main>
        <router-view></router-view>
    </v-main>
</v-app>
</template>

<script>
return {
    components: {
        "vue-header": ()=> $vueLoader("./app/components/layouts/header.vue"),
        "vue-drawer": ()=> $vueLoader("./app/components/layouts/drawer.vue")
    },

    data(){
        return {
            drawer: false,
            pages: [{
                title: "About",
                to: "/about",
                icon: "mdi-information-outline"
            }, {
                title: "Topics",
                to: "/topics",
                icon: "mdi-newspaper-variant-outline"
            }, {
                title: "Search",
                to: "/search",
                icon: "mdi-map-search-outline"
            }]
        };
    },

    async mounted(){
        await this.$store.dispatch("cafes/getCafes");
    }
}
</script>