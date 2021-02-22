<template>
    <b-input-group>
        <b-form-select  v-model="selectedTeacher":options="teacherOptions" id="teachers"/>
        <b-form-select  v-model="selectedFaculty" :options="facultyOptions" id="faculty"/>
        <b-input-group-append class="pl-2">
            <b-button variant="outline-light bg-success" >Пошук</b-button>
        </b-input-group-append>
    </b-input-group>
</template>

<script>
    import Teachers from "../store/modules/teacher";
    import Vuex, { mapActions, mapGetters} from 'vuex'
    export default {
        name: "FilterForm",
        computed: Vuex.mapState({
            ...mapGetters['allTeachersOption'],
            ...mapActions['getTeacherList', 'getFacultyList'],
            teacherOptions: state=> {
                let ops = state.teachers.teacher;
                let res = ops.reduce((acc, x) => [...acc,{text: x.name, value: x.id}] , [{text: 'Оберіть викладача', value:null}]);
                return res;
            },
            facultyOptions: state=>{
                let ops = state.faculty.faculty;
                let res = ops.reduce((acc, x) => [...acc,{text: x.name, value: x.id}] , [{text: 'Оберіть факультет', value:null}]);
                return res;
            }
        }),
        methods:{ },
        data(){
            return {
                selectedTeacher: null,
                selectedFaculty: null,
            }
        },
        created() {
            this.$store.dispatch("teachers/getTeacherList");
            this.$store.dispatch("faculty/getFacultyList");
        }
    }
</script>

<style scoped>

</style>