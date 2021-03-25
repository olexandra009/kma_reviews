import baseApi from "./apiUrl";
import faculty from "../store/modules/faculty";
import teacher from "../store/modules/teacher";

import Vue from "vue";
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default {
    async getPagedReviews(page){
        try {
            let res = await Vue.http.get(baseApi.baseUrl+'/review/all?teacher_id=1');
            console.log(res);
            return res
        } catch(error){
            console.log(error);
        }

       },

    getPagedReviewsByTeacher: (page, teacherId)=>
        Vue.http.get(baseApi.getReviews, {params: {page: page, teacher_id: teacherId}}),

    getPagedReviewsByFaculty: (page, facultyId)=>
        Vue.http.get(baseApi.getReviews, {params: {page:page, faculty_id:facultyId}}),

    async getListOfAllTeacher(){
        let res=[];
        let res2=[];
        let res3=[];
        let res4=[];
        let res5=[];
        let res6=[];
        try{
           let response = await Vue.http.get(baseApi.getAllTeacher+'?faculty_id=1');
            console.log(response);
           res = response.body;
        }catch(error){
            console.log(error);
        }
        try{
            let response = await Vue.http.get(baseApi.getAllTeacher+'?faculty_id=2');
            res2 = response.body;
        }catch(error){
            console.log(error);
        }
        try{
            let response = await Vue.http.get(baseApi.getAllTeacher+'?faculty_id=3');
            res3 = response.body;
        }catch(error){
            console.log(error);
        }
        try{
            let response = await Vue.http.get(baseApi.getAllTeacher+'?faculty_id=4');
            res4 = response.body;
        }catch(error){
            console.log(error);
        }
        try{
            let response = await Vue.http.get(baseApi.getAllTeacher+'?faculty_id=5');
            res5 = response.body;
        }catch(error){
            console.log(error);
        }
        try{
            let response = await Vue.http.get(baseApi.getAllTeacher+'?faculty_id=6');
            res6 = response.body;
        }catch(error){
            console.log(error);
        }
           return res.concat(res2).concat(res3).concat(res4).concat(res5).concat(res6);

        // let res = await Vue.http.get(baseApi.getAllTeacher);
        // return res;
    },

    async getListOfAllFaculty(){
        let res = await Vue.http.get(baseApi.getAllFaculty);
        return res;
    },

    async postNewReview(message){
        console.log("IN API");
        console.log(message);
        let options = { emulateJSON: true };
        let res = await Vue.http.post(baseApi.postReview,  message, options);

      return res;
    }

}
