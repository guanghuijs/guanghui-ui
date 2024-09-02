<template>
  <div class="card">
    <div class="card-title">{{ title }}</div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'HCard',
  };
</script>
<script lang="ts" setup>
  defineProps<{ title?: string }>();
</script>
<style lang="less" scoped>
  .card {
    margin: 0.3rem 0.25rem;
    border-radius: 4px;
    background: white;
    .card-title {
      line-height: 0.8rem;
      padding: 0 0.5rem;
      position: relative;
      font-size: 0.28rem;
      border-bottom: 1px solid #eee;
      color: #999;
    }
    .card-title::after {
      content: '';
      width: 0.08rem;
      position: absolute;
      height: 0.4rem;
      top: calc(50% - 0.2rem);
      background: #5a9bff;
      left: 0.2rem;
    }
    .card-content {
      padding: 0.25rem;
    }
  }

  .card[concise] {
    background: transparent;
    .card-title {
      border-bottom: none;
      padding: 0;
    }
    .card-title::after {
      display: none;
    }
    .card-content {
      padding: 0;
    }
  }
</style>
