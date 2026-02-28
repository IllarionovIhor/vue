<script setup>
import {useValid} from "@/utils/useValid.js";

const props = defineProps({
  formData: Object,
  form: Boolean
})

const emit = defineEmits(['submit']);

function onSubmit() {
  emit('submit');
}

const {required, emailRules} = useValid()

</script>

<template>

<v-form v-model="props.form" @submit.prevent="onSubmit">

  <v-text-field
      v-model="props.formData.email"
      :rules="[required, emailRules]"
      label="Email"
  />

  <v-text-field
      v-model="props.formData.password"
      type="password"
      :rules="[required]"
      label="Пароль"
  />

  <v-btn
      type="submit"
      block
      color="success"
      class="mt-4"
  >
    Submit

  </v-btn>

</v-form>

</template>

<style scoped>

</style>