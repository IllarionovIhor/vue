<script setup>

</script>

<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-col cols="12" sm="8">
      <v-tabs align-tabs="center" class="mb-6">
        <slot name="link"></slot>
      </v-tabs>
    </v-col>
  </v-container>
</template>

<style scoped>

</style>