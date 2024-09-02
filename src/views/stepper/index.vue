<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(1);
</script>

<template>
  <HCard title="进步器">
    <HStepper v-model:value="value"></HStepper>
  </HCard>
  <HCard title="步长设置(5)">
    <HStepper v-model:value="value" :step="5"></HStepper>
  </HCard>
  <HCard title="限制输入范围(-10,10)">
    <HStepper v-model:value="value" :step="1" :range="[-10, 10]"></HStepper>
  </HCard>
  <HCard title="设置主题色(pink)">
    <HStepper
      v-model:value="value"
      theme="pink"
      :step="1"
      :range="[0, 10]"
    ></HStepper>
  </HCard>
</template>
