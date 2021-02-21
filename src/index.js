import Vue from 'vue';
import App from "./components/App.vue";
import store from "./store/store.js";
import Vuex from "vuex";
//import {BootstrapVue} from "bootstrap-vue";
import VueRouter from "vue-router";
import ReviewItems from "./components/ReviewItems.vue";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(IconsPlugin);

const router = new VueRouter( {
    routes: [
        { path: '/', component: ReviewItems },
        { path: '/teacher/:teacher_id', component: ReviewItems },
        { path: '/faculty/:faculty_id', component: ReviewItems },

    ]
});


new Vue({
    store,
    render: h => h(App),
    router: router ,
}).$mount('#app');