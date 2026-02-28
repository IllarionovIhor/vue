<script setup>

import {useRouter} from "vue-router";
import { ref } from 'vue'
import {useStorage} from "@/utils/useStorage.js";
import InputLayout from "@/layout/InputLayout.vue";
import RegisterForm from "@/components/lab2/RegisterForm.vue";

const form = ref(false)
const router = useRouter();

const {setValue} = useStorage('user');

const formData = ref({
  id: Date.now(),
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
})


function onSubmit () {
  console.log(formData.value)
  if (!form.value) return
  setValue(formData.value)
  router.push({ name: "login"});
}

</script>

<template>

  <InputLayout>

    <template #title>
      <h1>Зареєструватися</h1>
    </template>

    <template #form>
      <RegisterForm :formData="formData" v-model="form" @register="onSubmit" />
    </template>

    <template #link>
      <p>Маєте аккаунт?</p>
      <router-link :to="{ name: 'login' }" class="d-flex align-center justify-center">Увійти</router-link>
    </template>

  </InputLayout>

</template>


<style scoped>

</style>