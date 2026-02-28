<script setup>

</script>

<template>

  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">

        <div class="d-flex align-center justify-center mb-10">
          <slot name="title"></slot>
        </div>

        <v-card class="px-6 py-8 mx-auto" max-width='400'>
          <slot name="form"></slot>
        </v-card>

        <div class="d-flex align-center justify-center mb-10">
          <slot name="link"></slot>
        </div>

      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>