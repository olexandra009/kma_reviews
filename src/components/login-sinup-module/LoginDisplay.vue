<template>
    <b-container class="min-vh-100">
        <b-row>
            <b-col sm="4"/>
            <b-col sm="4">
                <router-view/>
            </b-col>
            <b-col sm="4"/>
        </b-row>
    </b-container>
</template>

<script>
    import SingUp from "./SingUp.vue";
    import Login from "./Login.vue";
    export default {
        name: "LoginDisplay",
        components: {Login, SingUp}
    }
</script>

<style scoped>

</style>