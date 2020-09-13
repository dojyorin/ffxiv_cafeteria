<template>
<v-list>
    <template v-for="(page, i) in pages">
        <v-list-item :key="i" :to="page.to">
            <v-list-item-icon class="mr-4">
                <v-icon>{{page.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{page.title}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </template>
</v-list>
</template>

<script>
return {
    props: {
        contents: Array
    },

    data(){
        return {
            pages: [{
                title: "Main",
                to: "/",
                icon: "mdi-home"
            }, {
                title: "Sub",
                to: "/sub",
                icon: "mdi-account-circle"
            }]
        };
    }
};
</script>