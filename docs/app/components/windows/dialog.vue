<template>
<v-dialog persistent scrollable :width="width" :fullscreen="full" :value="value">
    <v-card :tile="full">
        <v-system-bar window dark :color="color">
            <v-icon>{{icon}}</v-icon>
            <span>{{title}}</span>

            <v-spacer></v-spacer>

            <v-btn v-if="maximize" icon tile @click="full = !full">
                <v-icon v-if="full" class="mr-0">mdi-window-restore</v-icon>
                <v-icon v-else class="mr-0">mdi-window-maximize</v-icon>
            </v-btn>

            <v-btn icon tile @click="$emit('input')">
                <v-icon class="mr-0">mdi-window-close</v-icon>
            </v-btn>
        </v-system-bar>

        <v-card-text class="pa-0">
            <slot></slot>
        </v-card-text>
    </v-card>
</v-dialog>
</template>

<script>
return {
    props: {
        value: Boolean,
        title: String,
        color: String,
        icon: String,
        width: Number,
        maximize: Boolean
    },
    data(){
        return {
            full: false
        };
    }
};
</script>