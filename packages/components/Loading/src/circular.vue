<script lang="ts" setup>
  withDefaults(
    defineProps<{
      color?: string;
    }>(),
    {
      color: '#999',
    }
  );
</script>

<template>
  <div class="loading"></div>
</template>

<style scoped lang="less">
  .loading {
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
    border: 1px solid v-bind(color);
    border-top-color: transparent;
    border-radius: 100%;
    animation: circle infinite 0.75s linear;
  }

  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
