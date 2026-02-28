<script setup>

import {useRouter} from "vue-router";
import { ref } from 'vue'
import {useStorage} from "@/utils/useStorage.js";
import LoginForm from "@/components/lab2/LoginForm.vue";
import InputLayout from "@/layout/InputLayout.vue";

import { inject} from 'vue'
const auth = inject('auth')

const form = ref(false)

const formData = ref({
  email: "",
  password: ""
})

const router = useRouter();

function onSubmit () {
  if (!form.value) return

  const {data: users} = useStorage('user')

  const user = users.value.find(u => u.email === formData.value.email)

  if (!user) {
    console.log("Email не знайдено!")
    return
  }

  if (user.password !== formData.value.password) {
    console.log("Пароль невірний!")
    return
  }

  auth.login(user)
  router.push({ name: "home"});
}

</script>

<template>

  <InputLayout>

    <template #title>
      <h1>Увійти</h1>
    </template>

     <template #form>
            <LoginForm :formData="formData" v-model="form" @submit="onSubmit" />
     </template>

    <template #link>
      <p>Ще не маєте аккаунт?</p>
      <router-link :to="{ name: 'register' }" class="d-flex align-center justify-center">Зареєструватися</router-link>
    </template>

  </InputLayout>

</template>


<style scoped>

</style>