<script setup>
import HeaderView from "./views/HeaderView.vue";
import FooterView from "./views/FooterView.vue";
</script>

<template>
  <div class="app-content">
  <HeaderView/>
   <div class="content">
     <Transition
         enter-active-class="fade-enter-active"
         enter-from-class="fade-enter-from"
         leave-active-class="fade-leave-active"
         leave-from-class="fade-leave-from"
>
       <RouterView v-slot="{ Component }">
         <component :is="Component" />
       </RouterView>

     </Transition>
   </div>
  <FooterView/>
  </div>

</template>

<style scoped>
.app-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-active {
  transition: all 0.3s ease;
}

</style>
