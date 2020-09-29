<template>
<v-carousel continuous cycle mandatory touchless hide-delimiters hide-delimiter-background :height="$vuetify.breakpoint.height - $vuetify.application.top" :interval="7500" :show-arrows="false">
    <template v-for="(photo, i) in photos">
        <v-carousel-item :key="i" :src="$vuetify.breakpoint.xsOnly ? photo.sp : photo.pc" transition="fade-transition" reverse-transition="fade-transition">
            <v-row justify="end" align-content="end" class="fill-height">
                <v-card flat tile color="transparent">
                    <v-card-title class="pr-8 grey--text">{{photo.offer}}</v-card-title>
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
                pc: "./static/id/1/Rwgq6URu.jpg",
                sp: "./static/id/1/9l0939pt.jpg",
                offer: "Bar Berry"
            }, {
                pc: "./static/id/5/T1EjO8bS.jpg",
                sp: "./static/id/5/T1EjO8bS.jpg",
                offer: "胡蝶之夢"
            }, {
                pc: "./static/id/6/8ARjmzmG.jpg",
                sp: "./static/id/6/8ARjmzmG.jpg",
                offer: "WhiteHorse"
            }]
        };
    }
};
</script>