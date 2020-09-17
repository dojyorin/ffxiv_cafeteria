<template>
<v-card :to="`/cafe/${cafe.id}`">
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

    <v-card-text class="pb-0">
        <v-icon small>mdi-account</v-icon>
        <span>{{cafe.owner}}</span>
    </v-card-text>

    <v-card-text class="py-0">
        <v-icon small>mdi-web</v-icon>
        <span>{{cafe.world}}</span>
    </v-card-text>

    <v-card-text class="pt-0">
        <v-icon small>mdi-map-marker</v-icon>
        <span>{{cafe.address}}</span>
    </v-card-text>
</v-card>
</template>

<script>
return {
    props: {
        cafe: Object
    }
};
</script>