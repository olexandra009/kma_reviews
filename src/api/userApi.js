import baseApi from "./apiUrl";
import faculty from "../store/modules/faculty";
import teacher from "../store/modules/teacher";

import Vue from "vue";
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default {
    async getPagedReviews(page){
          console.log("Here we are in getPagedReviews");
          let res = Vue.http.get(baseApi.getReviews, {params: {page: page}});
          return res},

    getPagedReviewsByTeacher: (page, teacherId)=>
        Vue.http.get(baseApi.getReviews, {params: {page: page, teacherId: teacherId}}),

    getPagedReviewsByFaculty: (page, facultyId)=>
        Vue.http.get(baseApi.getReviews, {params: {page:page, facultyId:facultyId}})

}
