<script setup lang="ts">
  import { Empty as HEmpty } from '#/components';
</script>

<template>
  <HCard title="默认用法">
    <HEmpty />
  </HCard>

  <HCard title="自定义描述文字">
    <HEmpty description="无记录" />
  </HCard>

  <HCard title="自定义宽度">
    <HEmpty description="无记录" width="100px" />
  </HCard>
</template>

<style scoped lang="less"></style>
