<template>
    <span></span>
</template>

<script>
    import Vuex, { mapActions } from 'vuex'

    export default {
        name: "ReviewLoader",
        computed: Vuex.mapState({
            teacherId: state=>state.reviews.techId,
            facultyId: state => state.reviews.facId
        }),
        methods:{
            ...Vuex.mapActions(['getReviews'])
        },
        mounted() {
            window.onscroll = () => {
                const el = document.documentElement
                const isBottomOfScreen = el.scrollTop + window.innerHeight  >  el.offsetHeight - 10
                if (isBottomOfScreen) {
                    this.$store.dispatch("reviews/getReviews", {'teacherId': this.teacherId,
                        'facultyId': this.facultyId});
                }
            }
        },
        beforeDestroy() {
            window.onscroll = null
        }
    }
</script>

<style scoped>

</style>