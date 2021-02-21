<template>
    <span></span>
</template>

<script>
    import Vuex, { mapActions } from 'vuex'

    export default {
        name: "ReviewLoader",
        methods:{
            ...Vuex.mapActions(['getReviews'])
        },
        mounted() {
            window.onscroll = () => {
                const el = document.documentElement
                const isBottomOfScreen = el.scrollTop + window.innerHeight  >  el.offsetHeight - 10
                if (isBottomOfScreen) {
                    this.$store.dispatch('reviews/getReviews');
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