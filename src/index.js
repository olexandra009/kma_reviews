import Vue from 'vue';
import App from "./components/App.vue";
import store from "./store/store";
new Vue({
    store: store,
    render: a => a(App),
    //router: router ,
}).$mount('#app');