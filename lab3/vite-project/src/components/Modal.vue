<script setup>

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])


</script>

<template>

  <Teleport to="body">
    <div v-if="modelValue" class="modal-overlay">
      <div class="modal-content">
      <p>You are open modal</p>
      <button @click="emit('update:modelValue', false)">Close</button>
    </div>
    </div>
  </Teleport>


</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 200px;
  text-align: center;
}

.modal-content p {
  font-weight: bolder;
  font-size: 40px;
}

.modal-content button {
   width: 30%;
   height: 40px;
   border-radius: 10px;
   background-color: rgba(204, 26, 26, 0.88);
   color: white;
   border: none;
   font-size: 20px;
}

.modal-content button:hover {
  background-color: rgba(104, 11, 11, 0.88);
  transition: 0.25s;
}

</style>