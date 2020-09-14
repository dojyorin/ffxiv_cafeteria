<template>
<v-container fluid>
    <v-row dense>
        <v-col cols sm="12" md="6">
            <v-card light>
                <v-card-title class="pb-0">お知らせ</v-card-title>

                <v-list class="mx-4">
                    <template v-for="(topic, i) in topics">
                        <v-divider v-if="i" :key="i"></v-divider>
                        <v-list-item :key="i">
                            <v-list-item-content>
                                <v-list-item-subtitle>{{topic.date}}</v-list-item-subtitle>
                                <v-list-item-title class="override_title_nowrap">{{topic.title}}</v-list-item-title>
                                <v-list-item-subtitle class="override_title_nowrap">{{topic.description}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-card>
        </v-col>

        <v-col cols sm="12" md="6">
            <v-card light>
                <v-card-title class="pb-0">新着店舗情報</v-card-title>

                <v-list class="mx-4">
                    <template v-for="(cafe, i) in cafes">
                        <v-divider v-if="i" :key="i"></v-divider>
                        <v-list-item :key="i">
                            <v-list-item-content>
                                <v-list-item-subtitle>{{$unixDate(cafe.regist)}}</v-list-item-subtitle>
                                <v-list-item-title class="override_title_nowrap">{{cafe.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
return {
    data(){
        return {
            topics: [],
            cafes: []
        };
    },

    async mounted(){
        for(const topic of await $httpGet("./data/topics/topics.json", "json")){
            this.topics.push(topic);
        }

        this.topics.splice(10);

        for(const dc of ["mana", "gaia", "elemental"]){
            for(const cafe of await $httpGet(`./data/cafes/${dc}.json`, "json")){
                this.cafes.push(cafe);
            }
        }

        this.cafes.sort((a, b)=> a.regist - b.regist).splice(20);
    }
}
</script>

<style scoped>
.override_title_nowrap{
    text-overflow: unset !important;
    white-space: unset !important;
}
</style>