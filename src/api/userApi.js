import baseApi from "./apiUrl";
import faculty from "../store/modules/faculty";
import teacher from "../store/modules/teacher";

import Vue from "vue";
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default {
    async getPagedReviews(page){
        let res = await Vue.http.get(baseApi.getReviews, {params: {page: page},});
        return res},

    getPagedReviewsByTeacher: (page, teacherId)=>
        Vue.http.get(baseApi.getReviews, {params: {page: page, teacher_id: teacherId}}),

    getPagedReviewsByFaculty: (page, facultyId)=>
        Vue.http.get(baseApi.getReviews, {params: {page:page, facultyId:facultyId}}),

    async getListOfAllTeacher(){
        let res = await Vue.http.get(baseApi.getAllTeacher);
        return res;
    },

    async getListOfAllFaculty(){
        let res = await Vue.http.get(baseApi.getAllFaculty);
        return res;
    },

    async postNewReview(message){
        console.log("IN API");
        console.log(message);
        let res = await Vue.http.post(baseApi.postReview, message,{param: {headers: baseApi.header}});
        return res;
    }

}
