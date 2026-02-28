<script setup>
import {useCartStore} from "../stores/CartStore.js";
import Products from "../components/Products.vue";
import {useRouter} from "vue-router";
import { useI18n} from "vue-i18n";

const router = useRouter();
const cartItems = useCartStore();
const { t } = useI18n({useScope: 'global'});

const deleteFromCart = (id) => {
  cartItems.remove(id);
  router.push("/products");
}

const clearCart = () => {
  cartItems.clear();
}

console.log(cartItems.items);
</script>

<template>
  <div class="container">

  <div class="view-func">
    <h3>{{t('totalCount')}} = {{cartItems.totalItems}}</h3>
    <h3>{{t('totalPrice')}} = {{cartItems.totalPrice}}</h3>
    <button @click="clearCart">{{t('buttons.clear')}}</button>
  </div>

    <Products v-for="product in cartItems.items" :key="product.id" :products="product" :deleteFromCart="true" @removeProducts="deleteFromCart(product.id)" />
  </div>

</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.view-func {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 300px;
  height: 200px;
  margin-bottom: 10px;
}

.view-func button{
  background-color: rgba(246, 38, 38, 0.88);
  color: white;
}
</style>