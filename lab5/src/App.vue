<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Solve from "./components/Solve.vue";
import Advantages from "./components/Advantages.vue";
import Rewiew from "./components/Rewiew.vue";
import FormComponent from "./components/FormComponent.vue";
import Steps from "./components/Steps.vue";
import Plans from "./components/Plans.vue";
import Problem from "./components/Problem.vue";
</script>

<template>
  <Header />
  <main class="main">
    <Hero/>
    <Advantages />
    <Rewiew />
    <FormComponent />
    <Steps />
    <Plans />
    <Problem />
    <Solve />
  </main>
  <Footer />
</template>

<style scoped>
body{
}
</style>
