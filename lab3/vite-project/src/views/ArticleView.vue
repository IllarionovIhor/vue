<script setup>

import data from '../articles/data.json'
import {useRoute} from 'vue-router'
import {computed, ref} from "vue";
import Modal from "../components/Modal.vue";

const route = useRoute()

const articleId = route.params.id;

const article = computed(() => data.find(a => a.id === Number(articleId)))

const open = ref(false)


</script>

<template>

<div class="container">

  <div class="ad" @click="open = true">
    <h1>
      Open Advertising
    </h1>
    <Modal v-model="open"/>
  </div>

  <div v-if="article" class="article">
    <img :src="article.image" :alt="article.title" />
    <h1>{{article.title}}</h1>
    <h3>{{article.description}}</h3>
    <p>{{article.date}}</p>
  </div>

  <div v-else>
    <p>Article with {{articleId}} not found</p>
  </div>

  <div class="ad" @click="open = true">
    <h1>
      Open Advertising
    </h1>
    <Modal v-model="open"/>
  </div>

</div>

</template>

<style scoped>

  .container {
    height: 800px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .article {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  img{
    width: 40%;
  }

  .article h3{
    color: #616161;
  }

  .ad{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    background-color: #888888;
    color: white;
  }

  .ad h1 {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

</style>