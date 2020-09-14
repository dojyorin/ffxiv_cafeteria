<template>
<v-container fluid>
    <v-row dense>
        <v-col cols sm="12">
            <v-card light>
                <v-card-title class="pb-0">お知らせ</v-card-title>

                <v-list>
                    <template v-for="(news, i) in newses">
                        <v-list-item :key="i">
                            <v-list-item-content>
                                <v-list-item-subtitle>{{news.date}}</v-list-item-subtitle>
                                <v-list-item-title class="override_title_nowrap">{{news.title}}</v-list-item-title>
                                <v-list-item-subtitle class="override_title_nowrap">{{news.description}}</v-list-item-subtitle>
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
            newses: []
        };
    },

    async mounted(){
        for(const news of await $httpGet("./data/topics/topics.json", "json")){
            this.newses.push(news);
        }
    }
}
</script>

<style scoped>
.override_title_nowrap{
    text-overflow: unset !important;
    white-space: unset !important;
}
</style>