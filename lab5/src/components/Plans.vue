<script setup>
import {computed, reactive, ref} from "vue";

const num = ref('')

const plan = ref('Base')

const items = reactive({
  price: {
    Base: 0,
    Plus: 100,
    Premium: 250
  }
})
const res = computed(() =>  num.value * items.price[plan.value])


</script>

<template>
<div class="container">
  <Card class="card">
    <template #title>
      <i class="pi pi-check-circle"></i>
      Basic
    </template>
    <template #content>
      <ul>
        <li>Let's you use our distilled models</li>
        <li>20 messages to an agent</li>
        <li>100k tokens</li>
        <li class="code">* You need a code to use this plan</li>
      </ul>
      <p class="p-basic">$0</p>
      <Button class="btn basic" v-copy="'WLK456JH'">Copy code</Button>
    </template>
  </Card>

  <Card class="card">
    <template #title>
      <i class="pi pi-bolt"></i>
      Plus
    </template>
    <template #content>
      <ul>
        <li>Full access to all models</li>
        <li>Full access to agents</li>
        <li>5 million tokens per day</li>
      </ul>
      <p>$100</p>
      <Button class="btn">Try</Button>
    </template>
  </Card>

  <Card class="card">
    <template #title>
      <i class="pi pi-crown"></i>
      Premium
    </template>
    <template #content>
      <ul>
        <li>Full access to all models</li>
        <li>Full access to agents</li>
        <li>Unlimited amount of tokens</li>
      </ul>
      <p>$250</p>
      <Button class="btn">Try</Button>
    </template>
  </Card>
</div>

  <div class="calc">
    <div class="card-select">
      <h2>Calculated price</h2>
     <input type="number" max="12" min="1" v-model="num" placeholder="Enter month count"/>
    *
    <select v-model="plan">
      <option>Base</option>
      <option>Plus</option>
      <option>Premium</option>
    </select>
    =
      <i>${{res}} for {{num}} months</i>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20px;
}

.card{
  border: 1px solid #888888;
  width: 400px;
  height: 350px;
}

.card:hover{
  transform: scale(1.05);
  transition: 0.3s;
}

ul{
  list-style-type: disc;
  font-size: 20px;
  font-weight: 200;
}

.btn{
  width: 200px;
  background-color: #569ac5;
  border: none;
  position: relative;
  top: calc(350px/2 - 130px);
  left: 68px;
  font-weight: 600;
}

p{
  font-weight: 600;
  font-size: 18px;
  position: relative;
  top: calc(350px/2 - 130px);
  left: calc(400px/2 - 50px);
}

.calc{
  /*border: 2px solid red;*/
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input[type="number"], select {
  height: 40px;
  width: 180px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid rgb(180, 196, 212);
  font-size: 16px;
  transition: all .2s ease;
}

input[type="number"]:focus,
select:focus {
  border-color: #378cba;
  outline: none;
  box-shadow: 0 0 0 2px rgba(55, 140, 186, 0.25);
}

i {
  font-size: 18px;
  font-weight: 200;
  color: #616161;
}

select{
  /*border: 1px solid green;*/
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
}

.card-select{
  /*border: 1px solid green;*/
  position: relative;
  bottom: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  padding: 30px 40px;
  gap: 12px;
  font-family: "Montserrat", sans-serif;
}

.code{
  list-style: none;
  font-size: 15px;
  margin-top: 10px;
  font-weight: 400;
  color: #aa1a1a;
}

.basic{
  position: relative;
  top: calc(350px/2 - 161px);
  left: 68px;
  font-weight: 600;
}

.p-basic {
  position: relative;
  top: calc(350px/2 - 156px);
  left: calc(400px/2 - 50px);
}

</style>