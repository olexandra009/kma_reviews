import userApi from "../../api/userApi";
import adminApi from "../../api/adminApi";

const state = {faculty: []};
const getters = {};
const action = {
    async addFaculty({commit, state},{faculty}){
        let response = await adminApi.addFaculty(faculty);
        if(response===null) return false;
        commit('addFacultyMutation', response);
        return true;
    },
    async deleteFacultyAction({commit,state}, {id}){
        let response = await adminApi.deleteFaculty(id);
        if(response===false) return false;
        commit('deleteFacultyMutation', id);
        return true;
    },
    async getFacultyList({commit, state}){
        let response = await userApi.getListOfAllFaculty();
        const data = await response.json();
        commit('getFacultyListMutation', data);
    }
};
const mutation = {
   addFacultyMutation(state, faculty){
       state.faculty.push(faculty);
   },
   deleteFacultyMutation(state, faculty){
       let id = parseInt(faculty);
       let i = state.faculty.findIndex(f => f.id===id);
       state.faculty.splice(i, 1);
    },
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