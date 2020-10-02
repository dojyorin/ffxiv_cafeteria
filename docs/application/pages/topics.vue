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
                                <v-list-item-subtitle>{{$$unixDate(topic.date)}}</v-list-item-subtitle>
                                <v-list-item-title class="override_title_noellipsis">{{topic.title}}</v-list-item-title>
                                <v-list-item-subtitle class="override_title_noellipsis">{{topic.description}}</v-list-item-subtitle>
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
                    <template v-for="(house, i) in houses">
                        <v-divider v-if="i" :key="i"></v-divider>
                        <v-list-item :key="i" :to="`/id/${house.id}`">
                            <v-list-item-content>
                                <v-list-item-subtitle>{{$$unixDate(house.regist)}}</v-list-item-subtitle>
                                <v-list-item-title class="override_title_noellipsis">{{house.name}}</v-list-item-title>
                                <v-list-item-subtitle class="override_title_noellipsis">{{house.datacenter}} - {{house.world}}</v-list-item-subtitle>
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
            houses: []
        };
    },

    async mounted(){
        const topics = await $httpGet("./data/topics.json", "json");
        topics.sort(({date:aRegist}, {date:bRegist})=> bRegist - aRegist).splice(10);

        for(const topic of topics){
            this.topics.push(topic);
        }

        const houses = await $httpGet("./data/houses.json", "json");
        houses.sort(({regist:aRegist}, {regist:bRegist})=> bRegist - aRegist).splice(10);

        for(const house of houses){
            this.houses.push(house);
        }
    }
}
</script>

<style scoped>
.override_title_noellipsis{
    text-overflow: unset !important;
    white-space: unset !important;
}
</style>