<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(false);
</script>

<template>
  <HCard title="开关">
    <HSwitch v-model:value="value"></HSwitch>
  </HCard>
  <HCard title="自定义大小">
    <HSwitch v-model:value="value" :size="24"></HSwitch>
    <HSwitch v-model:value="value" :size="36"></HSwitch>
  </HCard>
  <HCard title="自定义主题">
    <HSwitch v-model:value="value" theme="pink"></HSwitch>
    <HSwitch v-model:value="value" theme="#1989FA"></HSwitch>
  </HCard>
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
