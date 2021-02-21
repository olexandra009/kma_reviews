
<template>
    <b-container id="app" style="max-width: 100%" >
        <b-navbar toggleable="sm" class="navbar-expand navbar-dark bg-primary">
            <b-navbar-nav class="collapse navbar-collapse">
                <h1 class="p-3 text-light">Чесні відгуки на викладачів НаУКМА</h1>
            </b-navbar-nav>
        </b-navbar>
        <body-display/>

    </b-container>
</template>

<script>
    import BodyDisplay from "./BodyDisplay.vue";
    export default {
        name: "App",
        components: {BodyDisplay},
    }
</script>

<style scoped>

</style>