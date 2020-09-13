<template>
<div>
    <v-btn @click="dialog = true">Dialog</v-btn>
    <vue-dialog maximize color="purple" title="Dialog" icon="mdi-information-outline" v-model="dialog">
        <v-card>
            <v-card-text>Contents</v-card-text>
        </v-card>
    </vue-dialog>
</div>
</template>

<script>
return {
    components: {
        "vue-dialog": ()=> $vueLoader("./app/components/windows/dialog.vue")
    },

    data(){
        return {
            dialog: false
        };
    }
};
</script>