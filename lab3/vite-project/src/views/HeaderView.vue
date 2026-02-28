<script setup>
import {onMounted, ref, watch} from 'vue'

const isDark = ref(false)

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme === "dark") {
    isDark.value = true
    document.documentElement.classList.add('dark-mode')
  } else {
    isDark.value = false
    document.body.classList.remove('dark-mode')
  }
})

watch(isDark, (newValue) => {
  if (newValue) {
    document.body.classList.add('dark-mode')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('theme', 'light')
  }
})
</script>

<template>
  <div class="header">
  <RouterLink to="/" class="link">Main</RouterLink>
  <RouterLink to="/about" class="link">About</RouterLink>
    <div class="theme">
    <label class="toggle">
      <input type="checkbox" v-model="isDark">
      <span class="slider"></span>
    </label>
    </div>
  </div>
</template>

<style scoped>

 .header {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 50px;
   padding: 30px;
   background-color: var(--header-bg);
   color: var(--header-text);
 }

 .header .link {
   text-decoration: none;
   font-size: 40px;
   color: var(--header-text);
 }

 .header .link:hover {
   color: #37769e;
 }

 .toggle {
   position: relative;
   display: inline-block;
   width: 60px;
   height: 34px;
 }

 .toggle input {
   opacity: 0;
   width: 0;
   height: 0;
 }

 .slider {
   position: absolute;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #ffffff;
   transition: 0.4s;
   border-radius: 34px;
 }

 .slider:before {
   position: absolute;
   content: "";
   height: 26px;
   width: 26px;
   left: 4px;
   bottom: 4px;
   background-color: #bdb7b7;
   transition: 0.4s;
   border-radius: 50%;
 }

 input:checked + .slider {
   background-color: black;
 }

 input:checked + .slider:before {
   transform: translateX(26px);
 }

</style>