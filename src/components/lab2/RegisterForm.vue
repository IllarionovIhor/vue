<script setup>
import {useValid} from "@/utils/useValid.js";

const props = defineProps({
  formData: Object,
  formValue: Boolean
})

const emit = defineEmits(['register, update:formValue']);

function onSubmit() {
  emit('update:formValue', true)
  emit('register');
}

const {required, emailRules, confirmPasswordRules} = useValid(props.formData);

</script>

<template>

   <v-form @submit.prevent="onSubmit">
     <v-text-field
       v-model="props.formData.name"
       type="text"
       :rules="[required]"
       label="Ім'я"
     />

     <v-text-field
       v-model="props.formData.email"
       type="text"
       :rules="[required, emailRules]"
       label="Email"
     />

    <v-text-field
       v-model="props.formData.password"
       type="password"
       :rules="[required]"
       label="Пароль"
    />

    <v-text-field
       v-model="props.formData.password_confirmation"
       type="password"
       :rules="[required, confirmPasswordRules]"
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