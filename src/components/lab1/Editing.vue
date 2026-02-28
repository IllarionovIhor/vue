<script setup>
const props = defineProps({
  task: Object
})

const emit = defineEmits(['edit', 'save'])

function handleSave(task, title, description) {
  const upd = {...task, title, description}
  emit('save', upd)
}
</script>

<template>
  <div>
    <input v-model="props.task.title" type="text" class="task-input"/>
    <input v-model="props.task.description" type="text" class="task-input"/>
    <button @click="handleSave" type="button">Зберегти</button>
  </div>
</template>

<style scoped>

</style>