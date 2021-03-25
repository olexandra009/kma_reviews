import baseApi from "./apiUrl";
import Vue from "vue";
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {
    async addFaculty(faculty){
        try {
            let res = await Vue.http.post(baseApi.baseUrl + '/faculty?faculty=' + faculty);
            return res.body;
        }catch(e){
            console.log(e);
            return null;
        }
    },
    async deleteFaculty(facultyId){
        try {
            let res = await Vue.http.delete(baseApi.baseUrl + '/faculty?faculty_id='+facultyId);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    },

    async addTeacher(data){
        try {
            let res = await Vue.http.post(baseApi.baseUrl + '/teacher', data);
            return res.body;
        }catch(e){
            console.log(e);
            return null;
        }
    },
    async deleteTeacher(teacher_id){
        try {
            let res = await Vue.http.delete(baseApi.baseUrl + 'teacher?teacher_id='+teacher_id);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    },
    async updateTeacher(data){
        try {
            let res = await Vue.http.put(baseApi.baseUrl + '/teacher', data);
            return res.body;
        }catch(e){
            console.log(e);
            return null;
        }
    },

    async deleteReview(reviewId){
        try {
            let res = await Vue.http.delete(baseApi.baseUrl + '/review?review_id='+reviewId);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    },
    async deleteAllReview(){
        try {
            let res = await Vue.http.delete(baseApi.baseUrl + '/review/all');
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    },
}