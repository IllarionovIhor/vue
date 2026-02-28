<script setup>

import Editing from "@/components/lab1/Editing.vue";
import CheckList from "@/components/lab1/CheckList.vue";
const props = defineProps({
  allItems: Array,
  updId: Number,
    })

const emit = defineEmits(['delete', 'edit', 'save'])
function handleDelete(id) {
  emit('delete', id)
}

function editing(task) {
  emit('edit', task)
}

function handleSave(updatedTask) {
  emit('save', updatedTask)
}

</script>

<template>
  <ul class="task-list">
    <li v-for="(task) in allItems" :key="task.id"  class="items">
      <div v-if="task.id === updId">
        <Editing :task="task" @save="handleSave"/>
      </div>
      <div v-else>
        <CheckList :task="task" @delete="handleDelete" @edit="editing"/>
      </div>
    </li>
  </ul>
</template>


<style scoped>

.items{
  width: 180px;
  height: 250px;
  border: 1px solid gray;
  font-size: 11px;
  list-style: none;
  border-radius: 10px;
  color: rgba(26,26,26,0.70);
  font-family: "Candara";
  margin-bottom: 5px;
}

</style>