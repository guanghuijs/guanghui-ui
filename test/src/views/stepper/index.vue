<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(1);
</script>

<template>
  <h-card title="进步器">
    <h-stepper v-model:value="value"></h-stepper>
  </h-card>
  <h-card title="步长设置(5)">
    <h-stepper v-model:value="value" :step="5"></h-stepper>
  </h-card>
  <h-card title="限制输入范围(-10,10)">
    <h-stepper v-model:value="value" :step="1" :range="[-10, 10]"></h-stepper>
  </h-card>
  <h-card title="设置主题色(pink)">
    <h-stepper
      v-model:value="value"
      theme="pink"
      :step="1"
      :range="[0, 10]"
    ></h-stepper>
  </h-card>
</template>
