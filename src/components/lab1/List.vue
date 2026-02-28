<script setup>

import {ref, watch} from "vue";
import TaskList from "@/components/lab1/TaskList.vue";
import {useStorage} from "@/utils/useStorage.js";
import SortList from "@/components/lab1/SortList.vue";


const items = ref('')
const description = ref('')
const updId = ref(null)

const {data: allItems, setValue, removeValue, updateItem} = useStorage('task');

const originalItems = ref([...allItems.value]);

watch(allItems, (newVal) => {
  originalItems.value = [...newVal];
}, { deep: true });

const handleSubmit = () => {
  if (items.value.trim() === '' || description.value.trim() === '') return
  const newTask = {
    id: Date.now(),
    title: items.value,
    description: description.value,
    date: new Date(),
    status: false,
  }
  setValue(newTask)
  items.value = ''
  description.value = ''

}

const handleDelete = (id) => {
  removeValue(id)
}

const editing = (task) => {
   updId.value = task.id
}

const handleSave = (updTask) => {
  updateItem(updTask)
  updId.value = null

}

const handleSort = (sortedList) => {
  if (sortedList === null) {
     originalItems.value = JSON.parse(localStorage.getItem("task")) || [];
  } else {
    originalItems.value = [...sortedList];
  }
};

</script>

<template>
  <form @submit.prevent='handleSubmit' class="form-send">
    <input type="text" v-model="items" placeholder="Введіть заголовок" />
    <input type="text" v-model="description" placeholder="Введіть опис" />
    <button type='submit' class="button-send">Додати</button>
  </form>
  <SortList :allItems="allItems" @sort="handleSort" />
  <TaskList
      :allItems="originalItems"
      @delete="handleDelete"
      :updId="updId"
      @edit="editing"
      @save="handleSave"
  />
</template>

<style scoped>
button{
  width: 100px;
}
  .button-send{
    background-color: #5cb85c;
    height: 40px;
    font-size: 13px;
  }
  input[type="text"]{
    height: 40px;
    border: 2px solid #888888;
    border-radius: 10px;
    margin-right: 10px;

  }

</style>