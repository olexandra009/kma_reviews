
<template>
    <b-container id="app" style="max-width: 100%" >
       <b-navbar toggleable="lg" type="dark"  class="navbar-dark bg-primary">
       <!--     <b-navbar toggleable="lg" type="dark" variant="info">-->

              <b-navbar-brand target="nav-collapse" href="#">
                  <router-link to="/"> <h3 class="p-3 text-light">Чесні відгуки на викладачів НаУКМА</h3></router-link>
              </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"/>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item class="p-3" ><router-link class="text-light" to="/info">Інформація про проект</router-link></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

        </b-navbar>
        <router-view/>

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