<template>
<v-menu offset-y min-width="300" :close-on-content-click="false">
    <template #activator="{on, attrs}">
        <v-badge overlap top color="grey" offset-y="20" offset-x="20" :class="fix ? `m${fix}-n3` : ''" :content="count" :value="!!count">
            <v-btn icon v-bind="attrs" v-on="on">
                <v-icon large>{{icon}}</v-icon>
            </v-btn>
        </v-badge>
    </template>

    <v-card>
        <v-system-bar v-if="system" window dark :color="color">
            <v-icon>{{icon}}</v-icon>
            <span>{{title}}</span>
        </v-system-bar>

        <v-card-text class="pa-0">
            <slot></slot>
        </v-card-text>
    </v-card>
</v-menu>
</template>

<script>
return {
    props: {
        value: Boolean,
        title: String,
        color: String,
        icon: String,
        count: Number,
        system: Boolean,
        fix: String
    }
};
</script>