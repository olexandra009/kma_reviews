
<template>
    <b-container id="app" style="max-width: 100%" >
        <b-navbar toggleable="sm" class="navbar-expand navbar-dark bg-primary">
            <b-navbar-nav class="collapse navbar-collapse">
                <h1 class="p-3 text-light">Чесні відгуки на викладачів НаУКМА</h1>
            </b-navbar-nav>
        </b-navbar>
        <review-items/>
        <div>"STOP"</div>
    </b-container>
</template>

<script>
    import ReviewItems from "./ReviewItems.vue";
    export default {
        name: "App",
        components: {ReviewItems},
    }
</script>

<style scoped>

</style>