<template>
    <b-container class="p-0 m-0" >
        <div>"HIHIHI"</div>
        <b-row class="mb-2" v-for="review in reviews" :key="review.id" :review="review">
            <b-card class="bg-light">
                <b-card-body>
                    <b-card-sub-title>{{ review.sendTime }}</b-card-sub-title>
                    <b-card-text>{{ review.text }}</b-card-text>
                    <b-card-footer>Item</b-card-footer>
                </b-card-body>
            </b-card>
        </b-row>
    </b-container>
</template>

<script>
    import {mapState} from "vuex";
    import reviews from "../store/modules/reviews";

    export default {
        computed: mapState({
            reviews: state => state.reviews.reviews,
        }),
        created () {
            this.$store.dispatch('reviews/getReviews')
        },
        name: "ReviewItems"
    }
</script>

<style scoped>

</style>