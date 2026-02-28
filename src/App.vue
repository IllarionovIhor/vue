<script setup>

import { ref, provide } from 'vue'

const authUser = ref(JSON.parse(localStorage.getItem('authU')))
const isAuthenticated = ref(!!authUser.value)

function login(user) {
  authUser.value = user
  isAuthenticated.value = true
  localStorage.setItem('authU', JSON.stringify(user))
}

function logout() {
  isAuthenticated.value = false
  localStorage.removeItem('authU')
}

provide('auth', {
  authUser,
  isAuthenticated,
  login,
  logout,
})
</script>


<template>
  <RouterView/>
</template>

<style scoped>

</style>
