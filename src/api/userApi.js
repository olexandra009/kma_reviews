import baseApi from "./apiUrl";
import faculty from "../store/modules/faculty";
import teacher from "../store/modules/teacher";

export default {
    async getPagedReviews(page){
          return Vue.$http.get(baseApi.getReviews, {params: {page: page}})},

    getPagedReviewsByTeacher: (page, teacherId)=>
        Vue.$http.get(baseApi.getReviews, {params: {page: page, teacherId: teacherId}}),

    getPagedReviewsByFaculty: (page, facultyId)=>
        Vue.http.get(baseApi.getReviews, {params: {page:page, facultyId:facultyId}})

}
