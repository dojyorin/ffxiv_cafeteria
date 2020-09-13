<template>
<v-img :src="$vuetify.breakpoint.xsOnly ? './static/sp/top_8.jpg' : './static/pc/top_8.jpg'" :height="$vuetify.breakpoint.height - $vuetify.application.top">
    <v-container fluid class="fill-height common_blur_image">
        <v-row dense>
            <v-col cols sm="6" md="3">
            </v-col>
        </v-row>
    </v-container>
</v-img>
</template>