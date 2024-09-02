<script setup lang="ts">
  import { Loading as HLoading } from '#/components';
</script>

<template>
  <h-card title="动画类型">
    <h-space size="20">
      <HLoading />
      <HLoading type="spinner" />
    </h-space>
  </h-card>
  <h-card title="定义颜色">
    <h-space size="20">
      <HLoading color="red" />
      <HLoading color="blue" type="spinner" />
    </h-space>
  </h-card>
</template>

<style scoped lang="less"></style>
