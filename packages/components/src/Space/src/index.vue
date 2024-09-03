<script lang="ts">
  export default {
    name: 'HSpace',
  };
</script>
<script lang="ts" setup>
  defineProps<{ size: string | number }>();
</script>

<template>
  <div class="space-row" :style="{ gap: size + 'px' }">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
  .space-row {
    display: inline-flex;
  }
</style>
