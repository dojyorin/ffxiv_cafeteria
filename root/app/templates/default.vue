<template>
<v-app>
    <v-app-bar app dark color="blue" :height="52">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title class="pl-4">Application</v-toolbar-title>

        <v-spacer></v-spacer>
        <vue-header></vue-header>
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer">
        <v-toolbar dark absolute color="blue" width="100%" :height="$vuetify.application.top">
            <v-toolbar-title>Menu</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon @click="drawer = false">
                <v-icon large>mdi-close</v-icon>
            </v-btn>
        </v-toolbar>

        <vue-drawer :style="`padding-top:${$vuetify.application.top}px!important;`"></vue-drawer>
    </v-navigation-drawer>

    <v-main>
        <router-view></router-view>
    </v-main>

    <v-footer app>
        <vue-footer></vue-footer>
    </v-footer>
</v-app>
</template>

<script>
return {
    components: {
        "vue-header": ()=> $vueLoader("./app/components/layouts/header.vue"),
        "vue-drawer": ()=> $vueLoader("./app/components/layouts/drawer.vue"),
        "vue-footer": ()=> $vueLoader("./app/components/layouts/footer.vue")
    },

    data(){
        return {
            drawer: false
        };
    }
}
</script>