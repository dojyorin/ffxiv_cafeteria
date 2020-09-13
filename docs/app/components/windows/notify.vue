<template>
<v-snackbar app dark top :timeout="5000" :color="color" :value="value">
    <span>
        <slot></slot>
    </span>

    <template #action="{attrs}">
        <v-btn icon v-bind="attrs" @click="$emit('input')">
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </template>
</v-snackbar>
</template>

<script>
return {
    props: {
        value: Boolean,
        color: String
    }
};
</script>