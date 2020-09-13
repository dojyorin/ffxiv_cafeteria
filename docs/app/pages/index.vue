<template>
<v-carousel continuous cycle mandatory :height="$vuetify.breakpoint.height - $vuetify.application.top" touchless hide-delimiters hide-delimiter-background :interval="10000" :show-arrows="false">
    <template v-for="(photo, i) in photos">
        <v-carousel-item :key="i" :src="$vuetify.breakpoint.xsOnly ? photo.sp : photo.pc" transition="fade-transition" reverse-transition="fade-transition">
            <v-row justify="end" align-content="end" class="fill-height">
                <v-card flat tile color="transparent">
                    <v-card-title class="pr-8">{{photo.offer}} 様</v-card-title>
                </v-card>
            </v-row>
        </v-carousel-item>
    </template>
</v-carousel>
</template>

<script>
return {
    data(){
        return {
            photos: [{
                pc: "./static/cafes/mana/bar_berry/97G5TvGb.jpg",
                sp: "./static/cafes/mana/bar_berry/aHgCtYUE.jpg",
                offer: "Bar Berry"
            }]
        };
    }
};
</script>