<template>
    <b-card class="mt-4" bg-variant="light">
        <b-form v-on:submit="submitLogIn" v-on:cancel="cancelLogIn">
            <h4 class="text-center">Вхід</h4>
            <div class="mt-3">
                <label>Логін: </label>
                <b-input
                    required
                    id="input_login"
                    v-model="login"
                    type="text"
                    placeholder="Введіть логін"/>
            </div>
            <div class="mt-3">
                <label>Пароль: </label>
                <b-input-group>
                <b-input
                        required
                        id="input_login"
                        v-model="password"
                        :type="password_type"
                        placeholder="Введіть пароль">
                </b-input>
                    <b-input-group-append><b-button variant="outline-secondary" @click="showPassword()"><b-icon :icon="eyeType" /></b-button></b-input-group-append>
                </b-input-group>
            </div>
            <div class="d-flex justify-content-around mt-4">
                <b-button type="submit" style="width: 125px" variant="primary">Вхід</b-button>
                <b-button type="cancel" style="width: 125px" variant="info">Скасувати</b-button>
            </div>
        </b-form>
        <div class="text-center mt-4"><router-link to="/singup">Немає акаунта? Створити новий</router-link></div>
    </b-card>
</template>

<script>
    export default {
        name: "LoginVue",
        methods:{
            submitLogIn(){

            },
            cancelLogIn(){
              this.password = '';
              this.login = '';
              this.$router.push('/');
            },
            showPassword(){
                if(this.password_type === 'password'){
                    this.eyeType = this.showPasswordIcon;
                    this.password_type = 'text';
                } else {
                    this.eyeType = this.hidePasswordIcon;
                    this.password_type = 'password';
                }
            }
        },
        data(){
            return{
                hidePasswordIcon: 'eye',
                showPasswordIcon: 'eye-fill',
                eyeType: 'eye',
                password_type: 'password',
                password: '',
                login: '',
            }
        }
    }
</script>

<style scoped>

</style>