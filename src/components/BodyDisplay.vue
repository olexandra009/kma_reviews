<template>
    <b-container class="p-2 m-2" style="max-width: 100%">
        <b-container class="d-lg-none " >
            <b-row>
                <b-button class="mb-1 w-100" v-b-toggle.input_collapse  variant="outline-light bg-primary" >Залишити відгук</b-button>
            </b-row>

            <b-collapse id="input_collapse">
                <form-for-review class="mb-4"/>
            </b-collapse>

        </b-container>
        <b-row>
            <b-col col lg="3" class="d-none d-lg-block" ><question-list/></b-col>
            <b-col lg="5">
                <b-nav >
                     <filter-form class="form-inline mt-2 mb-2"/>
                  </b-nav>
                  <review-items/>
              </b-col>
              <b-col lg="4" class="d-none d-lg-block">
                  <b-container>
                      <form-for-review class="mb-4"/>
                      <form-for-problem/>
                  </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>


<script>
    import ReviewItems from "./ReviewItems.vue";
    import QuestionList from "./QuestionList.vue";
    import FormForReview from "./FormForReview.vue";
    import FilterForm from "./FilterForm.vue";
    import FormForProblem from "./FormForProblem.vue";
    export default {
        components: {ReviewItems, QuestionList, FormForReview,FilterForm, FormForProblem},
        name: "BodyDisplay",
    }
</script>

<style scoped>

</style>