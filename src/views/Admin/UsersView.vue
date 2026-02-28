<script setup>
import {useStorage} from "@/utils/useStorage.js";
import {useRouter} from "vue-router";
import Users from "@/components/lab2/Users.vue";

const {data: users} = useStorage('user');
const router = useRouter();

function toUser(user) {
  router.push({name: 'admin.user.id', params: {id: user.id}});
}

</script>

<template>
  <Users :users="users" @click="toUser"/>
</template>

<style scoped>

</style>