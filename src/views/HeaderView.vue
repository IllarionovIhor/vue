<script setup>

import MainMenu from "@/layout/MainMenu.vue";
</script>

<template>
  <div>

    <MainMenu>

      <template #link>
        <v-tab to="/">Головна</v-tab>
        <v-tab to="/register">Реєстрація</v-tab>
        <v-tab to="/login">Увійти</v-tab>
        <v-tab to="/admin">Адмін</v-tab>
        <v-tab :to="{ name: 'admin.users' }">Користувачі</v-tab>
      </template>

    </MainMenu>

    <RouterView/>

  </div>
</template>

<style scoped>

</style>