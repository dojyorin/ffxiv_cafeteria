<template>
<v-row justify="end" align-content="end" class="fill-height">
    <v-card flat tile color="transparent">
        <v-card-title class="pr-8">{{offer}} 様</v-card-title>
    </v-card>
</v-row>
</template>

<script>
return {
    props: {
        offer: String
    }
};
</script>