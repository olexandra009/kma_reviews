import userApi from "../../api/userApi";
import baseApi from "../../api/apiUrl";

import Vue from "vue";
import VueResource from 'vue-resource';
Vue.use(VueResource);

const state = () => ({all: [], currentPage: -1, totalPages: 0, facId: 1, techId: 1});

const getters = {
    //create getters from store for review
};

const actions = {
    async getReviews({commit}){
        let response = await Vue.http.get(baseApi.getReviews, {params: {page: 0},
        //    headers: baseApi.header
        });;
        const data = await response.json();
        console.log(data);
        //state.facId = faculty_id;
        //state.techId = teacher_id;
        state.totalPages =  data.totalPages;
        state.currentPage =  Math.min(data.currentPage, data.totalPages - 1);
        commit('getReviewPageMutation', data.reviews)
    }
};

const mutations ={
    getReviewPageMutation(state, reviews){
        const  targetReviews = state.reviews.concat(reviews);
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