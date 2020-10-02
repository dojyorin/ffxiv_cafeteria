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
        <template v-if="$route.path === '/'">
            <router-view></router-view>
        </template>

        <template v-else>
            <v-img src="./static/background.jpg" :height="$vuetify.breakpoint.height - $vuetify.application.top">
                <div class="fill-height bg_blur_image" ref="pages">
                    <router-view></router-view>
                </div>
            </v-img>
        </template>
    </v-main>
</v-app>
</template>

<script>
return {
    components: {
        "vue-header": ()=> $vueLoader("./application/components/layouts/header.vue"),
        "vue-drawer": ()=> $vueLoader("./application/components/layouts/drawer.vue")
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

    watch: {
        "$route.path"(){
            this.$refs.pages?.scroll(0, 0);
        }
    }
}
</script>

<style scoped>
.bg_blur_image{
    backdrop-filter: blur(10px) !important;
    overflow-y: scroll !important;
}
</style>