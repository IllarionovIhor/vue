<script setup>

const props = defineProps({
  users: Object
})

const emit = defineEmits(['click']);

function toUser(user) {
  emit('click', user);
}


</script>

<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">

        <h2>UsersView</h2>

        <v-list width="800">

          <v-list-item v-for="(user, i) in props.users" :key="i" hide-actions class="border mb-2 rounded-lg px-3 hover-bg pa-10">

            <v-list-item-title>

              <v-row align="center" class="spacer" no-gutters>

                <v-col cols="4" md="1" sm="2">
                  <v-avatar size="36px">
                    <v-img alt="Avatar" src="/images/active-user.png"></v-img>
                  </v-avatar>
                </v-col>

                <v-col class="hidden-xs text-left ms-2" md="3" sm="5">
                  <strong>{{user.name}}</strong>
                </v-col>

                <v-col class="text-no-wrap text-left" cols="5" sm="3">
                  <p>{{user.email}}</p>
                </v-col>

                <v-col class="text-no-wrap text-left" cols="5" sm="3">
                  <v-btn color="success" size="medium" class="pa-2" @click="toUser(user)">
                    Більше інформації
                  </v-btn>
                </v-col>

              </v-row>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>