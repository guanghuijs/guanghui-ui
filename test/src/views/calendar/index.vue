<script setup lang="ts">
  import { ref } from 'vue';
  const flag = ref(false);
  const date = ref('2023-08-16');
</script>

<template>
  <h-button @click="flag = true">打开{{ date }}</h-button>
  <h-popup v-model:open="flag" height="auto">
    <h-calendar v-model="date"></h-calendar>
  </h-popup>
</template>
