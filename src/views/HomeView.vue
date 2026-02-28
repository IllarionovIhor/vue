<script setup>
import {inject} from "vue";
import {router} from "../router/router.js";

const auth = inject('auth')

</script>

<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-row justify="center" >
      <v-col cols="12" sm="8" md="4">
        <h2 class="ma-3">Home</h2>
        <div v-if="auth.isAuthenticated.value" class="border-sm pa-10 ma-4 rounded-lg">
          <p class="ma-3">Авторизований користувач: <strong>{{ auth.authUser.value.email }}</strong></p>
          <v-btn @click="auth.logout" class="ma-3 rounded-5" color="red">Exit</v-btn>
        </div>
        <div v-else>
          {{router.push({ name: "login" })}}
        </div>
        </v-col>
    </v-row>
    </v-container>
</template>

<style scoped>

</style>