<template>
<v-row justify="end" align-content="end" class="fill-height">
    <v-card flat tile color="transparent">
        <v-card-title class="pr-8 grey--text">{{offer}}</v-card-title>
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