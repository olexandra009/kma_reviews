<template>
    <b-card bg-variant="light">
        <b-form>
            <b-form-group
                    label="Залишити відгук на викладача:"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
            ></b-form-group>

            <b-form-group  label="Викладач:" >
                <b-form-select
                        required
                ></b-form-select>
            </b-form-group>

            <b-form-group  label="Відгук:" >
                <b-form-textarea

                        required
                        rows="6"
                ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Відправити</b-button>
            <b-button type="reset" variant="danger">Очистити форму</b-button>

        </b-form>
    </b-card>
</template>

<script>
    export default {
        name: "FormForReview"
    }
</script>

<style scoped>

</style>