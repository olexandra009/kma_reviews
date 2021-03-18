
//const baseUrl = "http://localhost:8888";
const baseUrl = "https://kma-review-server.herokuapp.com";

const getReviews = baseUrl+"/review/all";
const getAllTeacher = baseUrl+"/teacher/all";
const getAllFaculty = baseUrl +"/faculty/all";
const postReview =baseUrl + "/review";

const header = {
 /*   "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE",
    "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",*/
    'Content-type': 'application/json'
}


export default {

    baseUrl,
    postReview,
    getAllTeacher,
    getAllFaculty,
    getReviews,
    header
}