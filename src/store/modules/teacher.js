import userApi from "../../api/userApi";

const state = {teacher: []};
const getters = {
    allTeachersOption(state){
        let res = state.teacher.reduce((acc, x) => [...acc,{text: x.name, value: x.id}] , [{text: 'Оберіть викладача', value:null}])
        console.log("Getter:");
        console.log(res);
        return res;
    },

};
const actions = {
    async getTeacherList({commit, state}){
        console.log("In action running");
        let response = await userApi.getListOfAllTeacher();
        console.log(response);
        const data = await response.json();
        commit('getTeacherListMutation', data);
    }
};
const mutations = {
    getTeacherListMutation(state, teachers){
        console.log("In mutation running");
        const  targetTeacher = state.teacher.concat(teachers);
        state.teacher = [];
        let a = {};
        for(let t of targetTeacher) {
            if (!(t.id in a)) {
                state.teacher.push(t);
                a[t.id] = 1
            }
        }
    }
};

export default {
    namespaced: 'teachers',
    state,
    getters,
    actions:actions,
    mutations: mutations,
};