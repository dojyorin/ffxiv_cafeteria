<template>
<v-list>
    <v-list-item @click="$router.push('/')">
        <v-list-item-icon class="mr-4">
            <v-icon>mdi-home-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>Top</v-list-item-title>
        </v-list-item-content>
    </v-list-item>

    <template v-for="(page, i) in contents">
        <v-list-item :key="i" :to="page.to">
            <v-list-item-icon class="mr-4">
                <v-icon>{{page.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{page.title}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </template>

    <v-subheader>データセンター別一覧</v-subheader>

    <template v-for="(page, i) in pages">
        <v-list-item :key="i" :to="page.to">
            <v-list-item-icon class="mr-4">
                <v-icon>mdi-map-outline</v-icon>
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
                title: "Mana",
                to: "/dc/mana"
            }, {
                title: "Gaia",
                to: "/dc/gaia"
            }, {
                title: "Elemental",
                to: "/dc/elemental"
            }]
        };
    }
};
</script>