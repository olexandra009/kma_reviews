<template>
    <b-container class="p-2 m-2" style="max-width: 100%">
        <b-row>
            <b-col col lg="3" class="d-none d-lg-block">
                <b-row class="mt-4">
                    <b-card border-variant="light">
                        <b-card-text>{{purpose}}</b-card-text>
                    </b-card>
                    <b-card border-variant="light">
                        <b-card-text>{{mainTask}}</b-card-text>
                    </b-card>
                </b-row>
            </b-col>
            <b-col lg="6">
                <b-container class="p-2 m-2" >
                    <h4 class="mb-2 text-center text-dark">Реалізована функціональність:</h4>
                    <b-row class="mb-2" v-for="task in doneFunctional" :key="task.id">
                            <b-card  border-variant="success" class="bg-light" style="width: 100%">
                                <b-row no-gutters>
                                    <b-col sm="2">
                                    <b-icon icon="check-circle" scale="2" variant="success"/>
                                    </b-col>
                                    <b-col md="10" sm="6">
                                    <b-card-text>{{task.text}}</b-card-text>
                                    </b-col>
                                </b-row>
                            </b-card>
                     </b-row>
                    <h4 class="mb-2 mt-2 text-center text-dark">В процесі реалізації:</h4>
                    <b-row class="mb-2" v-for="task in planned" :key="task.id">
                        <b-card  border-variant="secondary" class="bg-light" style="width: 100%">
                            <b-row no-gutters>
                                <b-col sm="2">
                                    <b-icon icon="hourglass-split" scale="2" variant="secondary"/>
                                </b-col>
                                <b-col md="10" sm="6">
                                    <b-card-text>{{task.text}}</b-card-text>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "InformationDisplay",
        data(){
              return{
                  purpose: "Метою проекта є вирішення проблеми недовіри студентів до " +
                      "анонімності існуючої системи відгуків на курс та надання можливості " +
                      "переглянути вже створені відгуки на викладачів.",
                  mainTask: "Завдання проекту - створити веб-ресурс, що дозволяє створювати та " +
                      "переглядати інформацію про викладачів, залишену студентами, зі зручною " +
                      "фільтрацією і пошуком",
                  doneFunctional: [{id:0, text: "Створення та перегляд відгуків про викладачів"},
                      {id:1, text: "Фільтрація відгуків за викладачем"},
                      {id:2, text: "Фільтрація відгуків за факультетом"}],
                  planned: [ {id:3, text: "Панель адміністратора"},
                      {id:4, text: "Реєстрація користувачів"},
                      {id:5, text: "Додавання та редагування списків викладачів та факультетів"},
                      {id:6, text: "Видалення відгуків та блокування аккаунтів"}],
              }
            }
    }
</script>

<style scoped>

</style>