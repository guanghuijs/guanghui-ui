<template>
  <h-card title="间隙组件">
    <h-space :size="size">
      <h-button @click="size = 10" type="primary">10</h-button>
      <h-button @click="size = 20" type="primary">20</h-button>
      <h-button @click="size = 30" type="primary">30</h-button>
      <h-button @click="size = 40" type="primary">40</h-button>
    </h-space>
  </h-card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const size = ref(10);
</script>
