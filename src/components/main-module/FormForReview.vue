<template>
    <b-card bg-variant="light">
        <b-form v-on:submit.prevent="SubmitReview" v-on:reset.prevent="ResetReview" >
            <b-form-group
                    label="Залишити відгук на викладача:"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
            />

            <b-form-group  label="Викладач:" >
                <b-form-select required
                               v-model="selectedTeacher"
                               :options="teachersOptions"
                />
            </b-form-group>

            <b-form-group  label="Відгук:" >
                <b-form-textarea
                        v-model="review"
                        required
                        rows="6"
                />
            </b-form-group>

            <b-button type="submit" variant="primary">Відправити</b-button>
            <b-button type="reset" variant="info">Очистити форму</b-button>

        </b-form>
    </b-card>
</template>

<script>
    import Vuex, {mapActions, mapGetters} from "vuex";

    export default {
        name: "FormForReview",
        computed: Vuex.mapState({
            ...mapActions['addReviewAction'],
        teachersOptions: state=> {
            let ops = state.teachers.teacher;
            let res = ops.reduce((acc, x) => [...acc,{text: x.name, value: x.id}] , [{text: 'Оберіть викладача', value:null}]);
            return res.sort((a, b) => -(a.id - b.id));
        }}),
        data() {
            return {
                selectedTeacher: null,
                review: null,
            }
        },
        methods:{
            SubmitReview:
                async function(event){
                console.log(this.selectedTeacher);
                const review = {
                    text : this.review,
                    teacherId: this.selectedTeacher,
                };
                console.log(review);
                let bol = await this.$store.dispatch('reviews/addReviewAction', {'review': review});
                console.log(bol);
                this.selectedTeacher = null;
                this.review = null;

                this.$bvToast.toast('Відгук було відправлено', {
                    title: `Успіх`,
                    variant: 'success',
                    solid: true
                });

            },
            ResetReview: function(event){
                this.selectedTeacher = null;
                this.review = null;
            },}

    }
</script>

<style scoped>

</style>