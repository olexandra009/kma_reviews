<template>
    <b-container>
        <b-form v-on:submit.prevent="newReview" class="mb-3">
            <b-input-group>
                <b-input  v-model="newName" type="text" required/>
                <b-input-group-append>
                    <b-button type="submit" variant="info">Додати</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form>
        <b-card v-for="faculty in faculties" class="mt-1">
            <b-row>
                <b-col class="col-10">{{faculty.name}}</b-col>
                <b-col class="col-2"><b-button @click="deleteFaculty(faculty.id)" variant="outline-info"><b-icon icon="x"/></b-button></b-col>
            </b-row>
        </b-card>
    </b-container>
</template>

<script>
    import Vuex, { mapActions} from 'vuex'
    export default {
        name: "FacultyMenu",
        computed: Vuex.mapState({
            ...mapActions['getFacultyList', 'resetPages'],
            faculties: state=> state.faculty.faculty,
        }),
        methods: {
            async newReview(){
                if(this.newName.trim().length === 0)
                    return;
                let r = await this.$store.dispatch("faculty/addFaculty", {'faculty': this.newName});
                this.newName = "";
                if(!r) this.$bvToast.toast('Факультет не було додано', {
                    title: `Помилка`,
                    variant: 'danger',
                    solid: true
                });
                else this.$bvToast.toast('Факультет успішно додано', {
                    title: `Успіх`,
                    variant: 'success',
                    solid: true
                });
            },
            async deleteFaculty(id){
                let r = await this.$store.dispatch("faculty/deleteFacultyAction", {'id':id});
                if(!r) this.$bvToast.toast('Факультет не було видалено', {
                    title: `Помилка`,
                    variant: 'danger',
                    solid: true
                });
                else this.$bvToast.toast('Факультет успішно видалено', {
                    title: `Успіх`,
                    variant: 'success',
                    solid: true
                });
            },
        },
        created() {
            this.$store.dispatch("faculty/getFacultyList");
        },
        data(){
            return {
                newName: " "
            };

        }
    }
</script>

<style scoped>

</style>