<template>
<v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
    <template v-for="(page, i) in contents">
        <v-btn text class="override_button_fontsize" :key="i" :to="page.to">{{page.title}}</v-btn>
    </template>
</v-toolbar-items>
</template>

<script>
return {
    props: {
        contents: Array
    }
};
</script>

<style scoped>
.override_button_fontsize{
    font-size: 1rem !important;
}
</style>