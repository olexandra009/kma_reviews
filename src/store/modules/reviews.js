import userApi from "../../api/userApi";
import baseApi from "../../api/apiUrl";
const state = () => ({reviews: [], currentPage: -1, totalPages: 0, facId: null, techId: null});

const getters = {
    //create getters from store for review
};

const action = {
    async getReviews({commit}, {teacher_id, faculty_id}){
        let response = await Vue.http.get(baseApi.getReviews, {params: {page: state.currentPage+1}});;
        const data = await response.json();
        console.log(data);
        state.facId = faculty_id;
        state.techId = teacher_id;
        state.totalPages =  data.totalPages;
        state.currentPage =  Math.min(data.currentPage, data.totalPages - 1);
        commit('getReviewPageMutation', data.reviews)
    }
};

const mutation ={
    getReviewPageMutation(state, reviews){
        const  targetReviews = state.reviews.concat(reviews);
        state.reviews = [];
        let d = {};
        for(let r of targetReviews) {
            if (!(r.id in d)) {
                state.reviews.push(r);
                d[r.id] = 1
            }
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    action,
    mutation,
    created () {
        this.$store.dispatch('getReviews')
    }
};