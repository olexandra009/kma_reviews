import userApi from "../../api/userApi";
import baseApi from "../../api/apiUrl";

import Vue from "vue";
import VueResource from 'vue-resource';
Vue.use(VueResource);

const state = () => ({all: [], currentPage: -1, totalPages: 0, facId: null, techId: null});

const getters = {
    //create getters from store for review
};

const actions = {
    async getReviews({commit, state}){
        let response = await userApi.getPagedReviews(state.currentPage+1);
        console.log(response);
        const dataString = await response.json();
        const data = JSON.parse(dataString);
       //change faculty
        // change teacher
        state.totalPages =  data.totalPages;
        state.currentPage =  Math.min(data.currentPage, data.totalPages - 1);
        commit('getReviewPageMutation', data.reviews)
    }
};


const mutations ={
    getReviewPageMutation(state, reviews){
        const  targetReviews = state.all.concat(reviews);
        state.all = [];
        let d = {};
        for(let r of targetReviews) {
            if (!(r.id in d)) {
                state.all.push(r);
                d[r.id] = 1
            }
        }
    }
};

export default {
    namespaced: 'reviews',
    state,
    getters,
    actions: actions,
    mutations: mutations,
};