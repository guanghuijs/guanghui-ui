<script lang="ts">
  export default {
    name: 'HButton',
  };
</script>
<script lang="ts" setup>
  defineProps<{
    type?: 'primary' | 'success' | 'danger' | 'warning';
  }>();
</script>

<template>
  <div class="btn" :class="type">
    <slot>按钮</slot>
  </div>
</template>

<style lang="less" scoped>
  .btn {
    padding: 0.15rem 0.3rem;
    background: white;
    border: 1px solid #eee;
    display: inline-block;
    border-radius: 4px;
    user-select: none;
  }

  .btn:active {
    opacity: 0.6;
  }

  .btn[block] {
    display: block;
    text-align: center;
    padding: 0.2rem 0.3rem;
  }

  .btn.primary {
    background: #1989fa;
    border: none;
    color: white;
  }

  .btn.success {
    background: #07c160;
    border: none;
    color: white;
  }

  .btn.danger {
    background: #ee0a24;
    border: none;
    color: white;
  }

  .btn.warning {
    background: #ff976a;
    border: none;
    color: white;
  }
</style>
