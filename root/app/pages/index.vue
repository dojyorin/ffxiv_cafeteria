<template>
<div>
    <v-btn @click="notify = true">Notify</v-btn>
    <vue-notify color="purple" v-model="notify">Contents</vue-notify>
</div>
</template>

<script>
return {
    components: {
        "vue-notify": ()=> $vueLoader("./app/components/windows/notify.vue")
    },

    data(){
        return {
            notify: false
        };
    }
};
</script>