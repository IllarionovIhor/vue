<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Solve problem',
    icon: 'pi pi-search',
  },
  {
    label: 'Advantages',
    icon: 'pi pi-bolt'
  },
  // {
  //   label: 'How it works?',
  //   icon: 'pi pi-question-circle'
  // },
  {
    label: 'Plans',
    icon: 'pi pi-crown'
  },
  {
    label: 'Reviews',
    icon: 'pi pi-comments'
  },
  {
    label: 'Contacts',
    icon: 'pi pi-envelope'
  }
]);
</script>

<template>
  <div class="card">
  <Menubar :model="items" class="header"/>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #95C2E8;
  height: 15vh;
}

.header{
  padding: 15px;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: large;
}

</style>