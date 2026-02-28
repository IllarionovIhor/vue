<script setup>

import Products from "../components/Products.vue";
import {useProductsStore} from "../stores/ProductsStore.js";
import {useCartStore} from "../stores/CartStore.js";
import {useRouter} from "vue-router";

const router = useRouter();
const products = useProductsStore();
const cartStore = useCartStore();

const addToCart = (item) => {
  cartStore.add(item)
  router.push("/cart")

}

</script>

<template>
  <div class="container">
    <Products v-for="product in products.products" :key="product.id" :products="product" @addProducts="addToCart(product)" :addToCart="true" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>