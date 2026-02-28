<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n({useScope: "global"})

const props = defineProps({
  products: {
    type: Object,
    default: () => {}
  },
  addToCart: {
    type: Boolean
  },
  deleteFromCart: {
    type: Boolean
  }
})

const emit = defineEmits(['addProducts', 'removeProducts'])

const handleClick = () => {
  emit('addProducts')
}

const handleRemove = () => {
  emit('removeProducts', props.products.id);
}

</script>

<template>
<div class="products">
  <img :src="products.image" alt="product image">
  <h1>{{ t(`products.${products.id}.name`) }}</h1>
  <h4>{{ t(`products.${products.id}.description`) }}</h4>
  <p>{{products.price}}</p>
  <p v-if="deleteFromCart">{{products.qty}}</p>
  <button v-if="addToCart" @click="handleClick">{{t('buttons.addToCart')}}</button>
  <button v-if="deleteFromCart" @click="handleRemove">{{t('buttons.delete')}}</button>
</div>
</template>

<style scoped>
  .products {
     border: 1px solid #ccc;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     width: 500px;
     height: 550px;
     flex-wrap: wrap;
     margin-bottom: 10px;
     padding: 10px;
     text-align: center;
  }

  .products button{
    background-color: #5cb85c;
  }

  img{
    width: 60%;
    height: 200px;
  }
</style>