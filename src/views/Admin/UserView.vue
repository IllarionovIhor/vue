<script setup>
import {useStorage} from "@/utils/useStorage.js";
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router"

const route = useRoute()

const { data: users } = useStorage('user')
const userId = route.params.id
const user = computed(() => users.value.find(u => u.id == userId))

</script>

<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-col cols="12" sm="8">
      <div class="d-flex align-center justify-center fill-height ma-4">
        <p>
          Користувач з id: <strong>{{user.id}}</strong>
        </p>
      </div>
     <div class="container border-sm pa-10" v-if="user">
       <p class="mb-4">Ім'я: <strong>{{user.name}}</strong></p>
       <p>Email: <strong>{{user.email}}</strong></p>
     </div>
     <p v-else>Користувача з {{userId}} не знайдено</p>
    </v-col>
  </v-container>
</template>

<style scoped>

</style>