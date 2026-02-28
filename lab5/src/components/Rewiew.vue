<script setup>
import { ref } from 'vue';
import users from "./../users.json"

const value = ref(5);
</script>

<template>
  <div class="header">
     <h2>Review</h2>
  </div>
  <div class="container">
    <div class="row">
    <p>Here you can see reviews from our clients!</p>
    </div>
      <div class="card" v-for="user in users">
    <Fieldset>
      <template #legend>
        <div class="flex items-center pl-2">
          <Avatar :image=user.image shape="circle" />
          <span class="font-bold p-2">{{user.name}}</span>
        </div>
      </template>
      <div class="card-rewiew">
        <Rating v-model="value" readonly />
      </div>
      <p class="m-0">
        {{user.comment}}
      </p>
    </Fieldset>
  </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;
}

.card{
  width: 450px;
  height: 400px;
  position: relative;
  top: 50px;
  right: 150px;
}

.header{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
}

.row{
  position: relative;
  bottom: 250px;
  left: 650px;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
}
</style>