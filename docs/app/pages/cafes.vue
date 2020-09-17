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

                        <v-card-text class="py-0">データセンター: {{dialog.datacenter}}</v-card-text>
                        <v-card-text class="py-0">ワールド: {{dialog.world}}</v-card-text>
                        <v-card-text class="pt-0">番地: {{dialog.address}}</v-card-text>

                        <v-card-text class="py-0">
                            <span>ハッシュタグ: </span>
                            <a v-if="dialog.hashtag" :href="`https://twitter.com/search?f=tweets&q=%23${dialog.hashtag}`" target="_blank" rel="noopener">#{{dialog.hashtag}}</a>
                            <span v-else>-</span>
                        </v-card-text>

                        <v-card-text class="pt-0">お問い合わせ: {{dialog.contact || "-"}}</v-card-text>

                        <v-card-text class="pt-0">登録日: {{$$unixDate(dialog.regist)}}</v-card-text>
                    </v-card>
                </v-col>

                <v-col v-if="dialog.branches.length" cols sm="12">
                    <v-card>
                        <v-card-title>
                            <v-icon>mdi-home-group</v-icon>
                            <span class="pl-2">支店情報</span>
                        </v-card-title>

                        <v-list class="mx-4">
                            <template v-for="(branch, i) in dialog.branches">
                                <v-divider v-if="i" :key="i"></v-divider>
                                <v-list-item :key="i">
                                    <v-list-item-content>
                                        <v-list-item-title>{{branch.name}} 支店</v-list-item-title>
                                        <v-list-item-subtitle>データセンター: {{branch.datacenter}}</v-list-item-subtitle>
                                        <v-list-item-subtitle>ワールド: {{branch.world}}</v-list-item-subtitle>
                                        <v-list-item-subtitle>番地: {{branch.address}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list>
                    </v-card>
                </v-col>

                <v-col cols sm="12">
                    <v-card>
                        <v-card-title>
                            <v-icon>mdi-calendar</v-icon>
                            <span class="pl-2">営業時間</span>
                        </v-card-title>

                        <v-card-subtitle class="pb-0">当日のオーナー様のご都合によるため、あくまで目安となります。</v-card-subtitle>

                        <v-card-text v-if="!dialog.opens.length" class="pt-4">(不定期)</v-card-text>

                        <v-list class="mx-4">
                            <template v-for="(day, i) in dialog.opens">
                                <v-divider v-if="i" :key="i"></v-divider>
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
                        <v-card-title>
                            <v-icon>mdi-comment-account-outline</v-icon>
                            <span class="pl-2">オーナー様より</span>
                        </v-card-title>

                        <v-card-text>{{dialog.comment || "-"}}</v-card-text>
                    </v-card>
                </v-col>

                <v-col cols sm="12">
                    <v-card>
                        <v-card-title>
                            <v-icon>mdi-image-multiple-outline</v-icon>
                            <span class="pl-2">ギャラリー</span>
                        </v-card-title>

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
            <template v-for="(cafe, i) in cafes">
                <v-col cols sm="6" md="4" :key="i">
                    <v-card>
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
                            <v-spacer></v-spacer>

                            <v-btn icon :href="`https://twitter.com/search?f=tweets&q=%23${cafe.hashtag}`" target="_blank" rel="noopener">
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
            cafes: [],
            dialog: {
                view: false,
                name: "",
                icon: "",
                datacenter: "",
                world: "",
                address: "",
                hashtag: "",
                owner: "",
                id: 0,
                regist: 0,
                contact: "",
                comment: "",
                branches: [],
                opens: [],
                galleries: []
            }
        };
    },

    methods: {
        async setCafes(dc){
            this.cafes.splice(0);

            for(const cafe of (await $httpGet("./data/cafes/cafes.json", "json")).filter(({datacenter})=> datacenter.toLowerCase() === dc)){
                this.cafes.push(cafe);
            }
        },

        openDialog(ctx){
            this.dialog.view = true;

            this.dialog.name = ctx.name;
            this.dialog.icon = ctx.icon;
            this.dialog.datacenter = ctx.datacenter;
            this.dialog.world = ctx.world;
            this.dialog.address = ctx.address;
            this.dialog.hashtag = ctx.hashtag;
            this.dialog.owner = ctx.owner;
            this.dialog.id = ctx.id;
            this.dialog.regist = ctx.regist;
            this.dialog.contact = ctx.contact;
            this.dialog.comment = ctx.comment;

            this.dialog.branches.splice(0);
            for(const branch of ctx.branches){
                this.dialog.branches.push(branch);
            }

            this.dialog.opens.splice(0);
            for(const day of ctx.opens){
                this.dialog.opens.push(day);
            }

            this.dialog.galleries.splice(0);
            for(const picture of ctx.galleries){
                this.dialog.galleries.push(picture);
            }
        }
    },

    mounted(){
        this.setCafes(this.$route.params.datacenter);
    },

    watch: {
        ["$route.params.datacenter"](dc){
            this.setCafes(dc);
        }
    }
};
</script>