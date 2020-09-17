<template>
<v-container fluid>
    <v-row dense>
        <v-col cols sm="12">
            <v-card>
                <v-card-title>
                    <v-avatar size="32">
                        <v-img :src="icon"></v-img>
                    </v-avatar>

                    <span class="pl-4">{{name}}</span>
                </v-card-title>

                <v-card-text>
                    オーナー: <a :href="`https://jp.finalfantasyxiv.com/lodestone/character/${character}`" target="_blank" rel="noopener">{{owner}}</a>
                </v-card-text>

                <v-card-text class="py-0">データセンター: {{datacenter}}</v-card-text>
                <v-card-text class="py-0">ワールド: {{world}}</v-card-text>
                <v-card-text class="pt-0">番地: {{address}}</v-card-text>

                <v-card-text class="py-0">
                    <span>ハッシュタグ: </span>
                    <a v-if="hashtag" :href="`https://twitter.com/search?f=tweets&q=%23${hashtag}`" target="_blank" rel="noopener">#{{hashtag}}</a>
                    <span v-else>-</span>
                </v-card-text>

                <v-card-text class="pt-0">お問い合わせ: {{contact || "-"}}</v-card-text>

                <v-card-text class="py-0">ID: {{id}}</v-card-text>
                <v-card-text class="pt-0">登録日: {{$$unixDate(regist)}}</v-card-text>
            </v-card>
        </v-col>

        <v-col v-if="branches.length" cols sm="12">
            <v-card>
                <v-card-title>
                    <v-icon>mdi-home-group</v-icon>
                    <span class="pl-2">支店情報</span>
                </v-card-title>

                <v-list class="mx-4">
                    <template v-for="(branch, i) in branches">
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

                <v-card-text class="pb-0">オーナー様のご都合により変動する可能性があるため、あくまで目安となります。</v-card-text>

                <v-list class="mx-4">
                    <template v-for="(day, i) in opens">
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

                <v-card-text>{{comment || "-"}}</v-card-text>
            </v-card>
        </v-col>

        <v-col cols sm="12">
            <v-card>
                <v-card-title>
                    <v-icon>mdi-image-multiple-outline</v-icon>
                    <span class="pl-2">ギャラリー</span>
                </v-card-title>

                <v-carousel continuous mandatory height="400" :interval="-1">
                    <template v-for="(gallery, i) in galleries">
                        <v-carousel-item :key="i" :src="gallery" :href="gallery" target="_blank" rel="noopener"></v-carousel-item>
                    </template>
                </v-carousel>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
return {
    data(){
        return {
            id: 0,
            name: "",
            icon: "",
            datacenter: "",
            world: "",
            address: "",
            hashtag: "",
            owner: "",
            character: 0,
            regist: 0,
            contact: "",
            comment: "",
            branches: [],
            opens: [],
            galleries: []
        };
    },

    methods: {
        async setCafe(ctx){
            const cafe = (await $httpGet("./data/cafes/cafes.json", "json")).find(({id})=> id === Number(ctx));

            this.id = cafe.id;
            this.name = cafe.name;
            this.icon = cafe.icon;
            this.datacenter = cafe.datacenter;
            this.world = cafe.world;
            this.address = cafe.address;
            this.hashtag = cafe.hashtag;
            this.owner = cafe.owner;
            this.character = cafe.character;
            this.regist = cafe.regist;
            this.contact = cafe.contact;
            this.comment = cafe.comment;

            this.branches.splice(0);
            for(const branch of cafe.branches){
                this.branches.push(branch);
            }

            this.opens.splice(0);
            for(const day of cafe.opens){
                this.opens.push(day);
            }

            this.galleries.splice(0);
            for(const picture of cafe.galleries){
                this.galleries.push(picture);
            }
        }
    },

    mounted(){
        this.setCafe(this.$route.params.id);
    },

    beforeRouteUpdate({params}, _, next){
        this.setCafe(params.id);
        next();
    }
};
</script>