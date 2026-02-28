<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";

const props = defineProps({
  task: Object
})

const emit = defineEmits(['delete', 'edit', 'status'])

function handleDelete(id) {
  emit('delete', id)
}

function editing(task) {
  emit('edit', task)
}

function handleToggleStatus(task){
  task.status = !task.status
  emit('updStatus', task)
}


</script>

<template>
  <div>
  status: {{ props.task.status }}
  <input type="checkbox" :checked="props.task.status" @change="handleToggleStatus(props.task)" >
  <h2>{{ props.task.title }}</h2>
  <p>{{ props.task.description }}</p>
  <button  @click='handleDelete(props.task.id)' class="button-delete">Видалити</button>
  <button  @click='editing(props.task)' class="button-upd">Змінити</button>
    <VueDatePicker :model-value="props.task.date ? new Date(props.task.date) : null"/>
  </div>
</template>

<style scoped>
button {
  width: 100px;
  margin-bottom: 5px
}
.button-delete{
  height: 40px;
  font-size: 13px;
  background-color: #f44336;
}

.button-upd{
  height: 40px;
  font-size: 13px;
  background-color: darkkhaki;
}
</style>