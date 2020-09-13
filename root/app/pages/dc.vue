<template>
<div>
    <vue-dialog title="詳細" icon="mdi-home-analytics" color="blue" width="500" v-model="dialog.view">
        <v-container fluid>
            <v-row dense>
                <v-col cols sm="12">
                    <v-card>
                        <v-card-title>店舗情報</v-card-title>
                        <v-card-text>{{dialog.world}}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </vue-dialog>

    <v-container fluid>
        <v-row dense>
            <template v-for="(cafe, i) in $store.getters['cafes/getCafes']($route.params.dc)">
                <v-col cols sm="6" md="3" :key="i">
                    <v-card color="rgba(230, 230, 230, 0.8)">
                        <v-img height="250" :src="cafe.thumbnail"></v-img>
                        <v-card-title>
                            <v-avatar size="32">
                                <v-img :src="cafe.icon"></v-img>
                            </v-avatar>

                            <span class="pl-2">{{cafe.name}}</span>
                        </v-card-title>

                        <v-card-subtitle>
                            <v-icon small>mdi-web</v-icon>
                            <span>{{cafe.world}}</span>

                            <v-icon small>mdi-map-marker</v-icon>
                            <span>{{cafe.address}}</span>
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn text block @click="openDialog(cafe)">
                                <v-icon left>mdi-home-analytics</v-icon>
                                <span>詳細を確認する</span>
                            </v-btn>
                        </v-card-actions>

                        <v-card-actions>
                            <v-icon v-if="cafe.beginner">mdi-clover</v-icon>

                            <v-spacer></v-spacer>

                            <v-btn icon :href="cafe.twitter" target="_blank" rel="noopener">
                                <v-icon>mdi-twitter</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </template>
        </v-row>
    </v-container>
</div>
</template>

<script>
return {
    components: {
        "vue-dialog": ()=> $vueLoader("./app/components/windows/dialog.vue")
    },

    data(){
        return {
            dialog: {
                view: false,
                name: "",
                icon: "",
                thumbnail: "",
                world: "",
                address: "",
                twitter: "",
                beginner: false,
                owner: "",
                id: 0,
                contact: "",
                description: "",
                comment: "",
                open: [],
                galleries: []
            }
        };
    },

    methods: {
        openDialog(ctx){
            this.dialog.view = true;

            this.dialog.name = ctx.name;
            this.dialog.icon = ctx.icon;
            this.dialog.thumbnail = ctx.thumbnail;
            this.dialog.world = ctx.world;
            this.dialog.address = ctx.address;
            this.dialog.twitter = ctx.twitter;
            this.dialog.beginner = ctx.beginner;
            this.dialog.owner = ctx.owner;
            this.dialog.id = ctx.id;
            this.dialog.contact = ctx.contact;
            this.dialog.description = ctx.description;
            this.dialog.comment = ctx.comment;

            for(const day of ctx.open){
                this.dialog.open.push(day);
            }

            for(const picture of ctx.galleries){
                this.dialog.galleries.push(picture);
            }
        },

        closeDialog(){
            this.dialog.view = false;

            this.dialog.name = "";
            this.dialog.icon = "";
            this.dialog.thumbnail = "";
            this.dialog.world = "";
            this.dialog.address = "";
            this.dialog.twitter = "";
            this.dialog.beginner = false;
            this.dialog.owner = "";
            this.dialog.id = 0;
            this.dialog.contact = "";
            this.dialog.description = "";
            this.dialog.comment = "";

            this.dialog.open.splice(0);
            this.dialog.galleries.splice(0);
        }
    }
};
</script>

<style scoped>
.override_list_icon_margin{
    margin: 12px 16px 0px 0px !important;
}
</style>