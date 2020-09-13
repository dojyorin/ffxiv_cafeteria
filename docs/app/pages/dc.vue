<template>
<div>
    <vue-dialog title="詳細情報" icon="mdi-home-analytics" color="blue" v-model="dialog.view">
        <v-container fluid>
            <v-row dense>
                <v-col cols sm="12">
                    <v-card>
                        <v-card-title>
                            <v-avatar size="32">
                                <v-img :src="dialog.icon"></v-img>
                            </v-avatar>

                            <span class="pl-4">{{dialog.name}}</span>
                        </v-card-title>

                        <v-card-text>
                            オーナー: <a :href="`https://jp.finalfantasyxiv.com/lodestone/character/${dialog.id}`" target="_blank" rel="noopener">{{dialog.owner}}</a>
                        </v-card-text>

                        <v-card-text class="py-0 text-capitalize">データセンター: {{$route.params.dc}}</v-card-text>
                        <v-card-text class="py-0">ワールド: {{dialog.world}}</v-card-text>
                        <v-card-text class="pt-0">番地: {{dialog.address}}</v-card-text>

                        <v-card-text class="py-0">
                            Twitter: <a :href="dialog.twitter" target="_blank" rel="noopener">Link</a>
                        </v-card-text>

                        <v-card-text class="pt-0">お問い合わせ: {{dialog.contact || "-"}}</v-card-text>

                        <v-card-text v-if="dialog.beginner" class="pt-0">駆け出し経営者: 優しく見守ってください!</v-card-text>
                    </v-card>
                </v-col>

                <v-col cols sm="12">
                    <v-card>
                        <v-card-title>
                            <v-icon>mdi-calendar</v-icon>
                            <span class="pl-2">営業時間</span>
                        </v-card-title>

                        <v-card-subtitle>当日のオーナー様のご都合によるため、あくまで目安となります。</v-card-subtitle>
                        <v-list>
                            <template v-for="(day, i) in dialog.opens">
                                <v-list-item :key="i">
                                    <v-list-item-content>
                                        <v-list-item-title>{{day.dayofweek}}</v-list-item-title>
                                        <v-list-item-subtitle>{{day.time}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list>
                    </v-card>
                </v-col>

                <v-col cols sm="12">
                    <v-card>
                        <v-card-title>オーナー様よりひとこと</v-card-title>
                        <v-card-text>{{dialog.comment || "-"}}</v-card-text>
                    </v-card>
                </v-col>

                <v-col cols sm="12">
                    <v-card>
                        <v-card-title>ギャラリー</v-card-title>

                        <v-carousel continuous mandatory height="400" :interval="-1">
                            <template v-for="(gallery, i) in dialog.galleries">
                                <v-carousel-item :key="i" :src="gallery" :href="gallery" target="_blank" rel="noopener"></v-carousel-item>
                            </template>
                        </v-carousel>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </vue-dialog>

    <v-container fluid>
        <v-row dense>
            <template v-for="(cafe, i) in $store.getters['cafes/getCafes']($route.params.dc)">
                <v-col cols sm="6" md="3" :key="i">
                    <v-card light>
                        <v-img height="250" :src="cafe.thumbnail">
                            <template #placeholder>
                                <v-row justify="center" align="center" class="fill-height">
                                    No Image...
                                </v-row>
                            </template>
                        </v-img>

                        <v-card-title>
                            <v-avatar size="32">
                                <v-img :src="cafe.icon"></v-img>
                            </v-avatar>

                            <span class="pl-4">{{cafe.name}}</span>
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
                world: "",
                address: "",
                twitter: "",
                beginner: false,
                owner: "",
                id: 0,
                contact: "",
                comment: "",
                opens: [],
                galleries: []
            }
        };
    },

    methods: {
        openDialog(ctx){
            this.dialog.view = true;

            this.dialog.name = ctx.name;
            this.dialog.icon = ctx.icon;
            this.dialog.world = ctx.world;
            this.dialog.address = ctx.address;
            this.dialog.twitter = ctx.twitter;
            this.dialog.beginner = ctx.beginner;
            this.dialog.owner = ctx.owner;
            this.dialog.id = ctx.id;
            this.dialog.contact = ctx.contact;
            this.dialog.comment = ctx.comment;

            this.dialog.opens.splice(0);
            for(const day of ctx.opens){
                this.dialog.opens.push(day);
            }

            this.dialog.galleries.splice(0);
            for(const picture of ctx.galleries){
                this.dialog.galleries.push(picture);
            }
        }
    }
};
</script>