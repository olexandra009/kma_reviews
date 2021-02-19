const baseUrl = "https://kma-review-system.herokuapp.com/";

const getReviews = baseUrl+"/review/pageable";

const header = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE",
    "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
}


export default {
    getReviews,
    header
}