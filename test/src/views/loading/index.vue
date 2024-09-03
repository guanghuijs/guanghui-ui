<script setup lang="ts">
  import { Loading as h-loading } from '@ghui/components';
</script>

<template>
  <h-card title="动画类型">
    <h-space size="20">
      <h-loading />
      <h-loading type="spinner" />
    </h-space>
  </h-card>
  <h-card title="定义颜色">
    <h-space size="20">
      <h-loading color="red" />
      <h-loading color="blue" type="spinner" />
    </h-space>
  </h-card>
</template>

<style scoped lang="less"></style>
