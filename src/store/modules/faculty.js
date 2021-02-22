import userApi from "../../api/userApi";

const state = {faculty: []};
const getters = {};
const action = {
    async getFacultyList({commit, state}){
        let response = await userApi.getListOfAllFaculty();
        const data = await response.json();
        commit('getFacultyListMutation', data);
    }
};
const mutation = {
    getFacultyListMutation(state, faculty){
        const  targetTeacher = state.faculty.concat(faculty);
        state.faculty = [];
        let a = {};
        for(let t of targetTeacher) {
            if (!(t.id in a)) {
                state.faculty.push(t);
                a[t.id] = 1
            }
        }
    }
};

export default {
    namespaced: 'faculty',
    state: state,
    getters: getters,
    actions: action,
    mutations: mutation,
};