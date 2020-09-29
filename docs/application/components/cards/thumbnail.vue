<template>
<v-card :to="`/id/${house.id}`">
    <v-img height="250" :src="house.thumbnail">
        <template #placeholder>
            <v-row justify="center" align="center" class="fill-height">
                No Image...
            </v-row>
        </template>
    </v-img>

    <v-card-title>
        <v-avatar size="32">
            <v-img :src="house.icon"></v-img>
        </v-avatar>

        <span class="pl-4">{{house.name}}</span>
    </v-card-title>

    <v-card-text class="pb-0">
        <v-icon small>mdi-account</v-icon>
        <span>{{house.owner}}</span>
    </v-card-text>

    <v-card-text class="py-0">
        <v-icon small>mdi-web</v-icon>
        <span>{{house.world}}</span>
    </v-card-text>

    <v-card-text class="pt-0">
        <v-icon small>mdi-map-marker</v-icon>
        <span>{{house.address}}</span>
    </v-card-text>
</v-card>
</template>

<script>
return {
    props: {
        house: Object
    }
};
</script>