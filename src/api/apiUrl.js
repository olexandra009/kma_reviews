//const baseUrl = "https://kma-review-system.herokuapp.com/";
const baseUrl = "http://localhost:8888";

const getReviews = baseUrl+"/review/pageable";
const getAllTeacher = baseUrl+"/teacher/all";
const getAllFaculty = baseUrl +"/faculty/all";

const header = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE",
    "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
}


export default {
    getAllTeacher,
    getAllFaculty,
    getReviews,
    header
}