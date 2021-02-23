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
    async addReviewAction({commit, state}, {review}) {
        console.log("IN ACTION:: ")
        console.log(review);
        let result = await userApi.postNewReview(review);
        console.log(result);
        const data = await result.json();
        console.log(data);
        let notAddToCurrent =  state.techId
            && data.teacher.id !== state.techId
            || state.facId
            && state.facId !== data.teacher.faculty.id;
         if(!notAddToCurrent ) {
             commit('addReviewMutation', data);
             return true;
         }
         return false;
    },
    resetPages({commit}){
        commit('resetPageMutation');
    },
    async getReviews({commit, state}, {teacherId, facultyId}){
        let response;
        if(teacherId) response = await userApi.getPagedReviewsByTeacher(state.currentPage+1, teacherId);
        else if(facultyId) response = await userApi.getPagedReviewsByFaculty(state.currentPage+1, facultyId);
        else response = await userApi.getPagedReviews(state.currentPage+1);
        console.log(response);
        const data = await response.json();
       //change faculty
        // change teacher
        if(teacherId) state.techId = teacherId;
        else if (facultyId) state.facId = facultyId;

        state.totalPages =  data.totalPages;
        state.currentPage =  Math.min(data.currentPage, data.totalPages - 1);
        commit('getReviewPageMutation', data.reviews)
    }
};


const mutations ={
    addReviewMutation(state, review){
        state.all = [
            review,
            ...state.all

        ]
    },
    resetPageMutation(state){
        state.totalPages = 0;
        state.currentPage = -1;
        state.all = [];
    },
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