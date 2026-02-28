<script setup>
import data from "../articles/data.json"
import {useRouter} from "vue-router";

const router = useRouter();

function toArticle(data) {
  router.push({name: 'article', params: {id: data.id}});
}

</script>

<template>
  <div class="container">
    <h1>
      Articles Page
    </h1>
    <ul>
     <li v-for="article in data">
        <img :src="article.image" alt="image here">
        <h2>{{ article.title }}</h2>
        <p>{{ article.date }}</p>
       <button @click="toArticle(article)">More Info</button>
     </li>
    </ul>
  </div>
</template>

<style scoped>

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
}

li {
  list-style: none;
  width: 300px;
  height: 400px;
  border: 1px solid #888;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--li-bg);
  color: var(--text-color);
}

li:hover {
  box-shadow: 0 0 25px 5px #888888;
  transform: scale(1.05);
  transition: 0.3s;
}

img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

button {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}



</style>
