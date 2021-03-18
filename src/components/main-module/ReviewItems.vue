<template>
    <b-container class="p-0 m-0" >
        <b-row class="mb-2" v-for="review in reviews" :key="review.id" :review="review">
            <b-card class="bg-light"  style="width: 100%">
                <b-card-body>
                    <b-card-title>{{review.teacher.name}}</b-card-title>
                    <b-card-sub-title>{{ review.sendTime }}</b-card-sub-title>
                    <b-card-text>{{ review.text }}</b-card-text>
                </b-card-body>
            </b-card>
        </b-row>
        <review-loader></review-loader>
    </b-container>
</template>

<script>
    import Vuex from "vuex";
    import ReviewLoader from "./ReviewLoader.vue";
    import Reviews from "../../store/modules/reviews";


    export default {
        components: {ReviewLoader},
        computed: Vuex.mapState({
            reviews: state => state.reviews.all,
            teacherId: state=>state.reviews.techId,
            facultyId: state => state.reviews.facId

        }),
        methods:{
            ...Vuex.mapActions(['getReviews'])
        },
        mounted() {
            this.$store.dispatch("reviews/getReviews", {'teacherId': this.teacherId,
                'facultyId': this.facultyId})
        },
        name: "ReviewItems"
    }
</script>

<style scoped>

</style>