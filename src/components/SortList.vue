<script setup>
import '@vuepic/vue-datepicker/dist/main.css'

import {ref, watch} from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
const props = defineProps({
  allItems: Array,
  updId: Number,
})
const list = ref([...props.allItems])
const emit = defineEmits("sort")

watch(
    () => props.allItems,
    (newVal) => {
  list.value = [...newVal]
    },
    {  deep: true }
)

const titleString = ref('')

const sortTitle = () => {
  if (titleString.value.trim() === '') {
    emit("sort", props.allItems)
  } else {
    const sorted = props.allItems.filter(item => item.title.toLowerCase().includes(titleString.value.toLowerCase()))
    emit("sort", sorted)
  }
}

const fromDay = ref(null)
const toDay = ref(null)

const sortDate = () => {
  const from = fromDay.value ? new Date(fromDay.value) : null
  const to = toDay.value ? new Date(toDay.value) : null
  const filterDate = props.allItems.filter(date => {
        const dateStr = new Date(date.date)
        if(from && to){
          return dateStr >= from && dateStr <= to
        }

        return true
      })

  emit("sort", filterDate)



}

let sortedByStatus = false;
const sortStatus = () => {
  sortedByStatus = !sortedByStatus;
  if (sortedByStatus) {
    const sortedStatus = [...props.allItems].filter(
        (check) => check.status === true
    );
    emit("sort", sortedStatus)
  } else {
    emit("sort", null)
  }
};



</script>

<template>
  <div>
    <div>
    <input type="text" v-model="titleString">
    <button @click="sortTitle">Фільтрувати за назвою</button>
    </div>
    <div>
      <VueDatePicker v-model="fromDay" placeholder="Від"/>
      <VueDatePicker v-model="toDay" placeholder="До"/>
      <button @click="sortDate">Фільтрувати за датою</button>
    </div>
    <button @click="sortStatus">Фільтрувати за статусом</button>
  </div>
</template>

<style scoped>

</style>