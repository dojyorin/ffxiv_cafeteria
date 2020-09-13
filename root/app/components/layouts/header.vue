<template>
<vue-menu system fix="r" color="purple" title="Notify" icon="mdi-bell-outline" :count="1">
    <v-card>
        <v-card-text>Contents</v-card-text>
    </v-card>
</vue-menu>
</template>

<script>
return {
    components: {
        "vue-menu": ()=> $vueLoader("./app/components/windows/menu.vue")
    },

    props: {
        contents: Array
    }
};
</script>