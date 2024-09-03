<script lang="ts">
  export default {
    name: 'HDivider',
  };
</script>
<script lang="ts" setup>
  defineProps<{
    orientation?: 'left' | 'right' | 'center';
  }>();
</script>

<template>
  <div class="divider-comp" :style="{ textAlign: orientation }">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style lang="less" scoped>
  .divider-comp {
    position: relative;
    padding: 0 0.2rem;
    color: #666;
    span {
      font-size: 0.24rem;
      display: inline-block;
      background: white;
      padding: 0 0.1rem;
      position: relative;
      z-index: 1;
    }
  }
  .divider-comp::after {
    position: absolute;
    content: '';
    height: 1px;
    background: #333;
    width: 100%;
    left: 0;
    top: 50%;
    z-index: 0;
  }
</style>
