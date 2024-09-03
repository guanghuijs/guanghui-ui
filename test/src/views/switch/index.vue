<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(false);
</script>

<template>
  <h-card title="开关">
    <h-switch v-model:value="value"></h-switch>
  </h-card>
  <h-card title="自定义大小">
    <h-switch v-model:value="value" :size="24"></h-switch>
    <h-switch v-model:value="value" :size="36"></h-switch>
  </h-card>
  <h-card title="自定义主题">
    <h-switch v-model:value="value" theme="pink"></h-switch>
    <h-switch v-model:value="value" theme="#1989FA"></h-switch>
  </h-card>
</template>

<style scoped lang="less">
  .check-item {
    padding: 10px 0;
    .label {
      padding: 0 10px;
    }
  }
  .SwipeCell {
    background: white;
    .a {
      div {
        text-align: center;
        width: 70px;
        color: white;
      }
    }
  }
</style>
