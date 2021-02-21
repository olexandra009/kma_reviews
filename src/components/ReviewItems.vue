<template>
    <b-container class="p-0 m-0" >
        <b-row class="mb-2" v-for="review in reviews" :key="review.id" :review="review">
            <b-card class="bg-light">
                <b-card-body>
                    <b-card-sub-title>{{ review.sendTime }}</b-card-sub-title>
                    <b-card-text>{{ review.text }}</b-card-text>
                    <b-card-footer>Item</b-card-footer>
                </b-card-body>
            </b-card>
        </b-row>
        <review-loader></review-loader>
    </b-container>
</template>

<script>
    import Vuex from "vuex";
    import ReviewLoader from "./ReviewLoader.vue";
    import Reviews from "../store/modules/reviews";


    export default {
        components: {ReviewLoader},
        computed: Vuex.mapState({
            reviews: state => state.reviews.all,
        }),
        methods:{
            ...Vuex.mapActions(['getReviews'])
        },

        mounted () {
            this.$store.dispatch("reviews/getReviews")
        },
        name: "ReviewItems"
    }
</script>

<style scoped>

</style>