<template>
    <b-container class="p-0 m-0" >
        <b-row class="mb-2" v-for="review in reviews" :key="review.id" :review="review"/>
        <lazy-loader></lazy-loader>
    </b-container>
</template>

<script>
    export default {
        name: "ReviewItems"
    }
</script>

<style scoped>

</style>