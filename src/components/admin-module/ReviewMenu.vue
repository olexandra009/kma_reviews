<template>
    <b-container>
        <filter-form/>
        <review-items/>
    </b-container>
</template>

<script>
    import FilterForm from "../main-module/FilterForm.vue";
    import ReviewItems from "../main-module/ReviewItems.vue";
    export default {
        name: "ReviewMenu",
        components: {ReviewItems, FilterForm},
    }
</script>

<style scoped>

</style>