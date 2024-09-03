<script lang="ts">
  export default {
    name: 'HNavBar',
  };
</script>
<script setup lang="ts">
  import { Icon as HIcon } from '@ghui/components';
  withDefaults(
    defineProps<{
      title?: string;
      leftText?: string;
      rightText?: string;
    }>(),
    {}
  );
</script>

<template>
  <div class="nav-bar" v-bind="$attrs">
    <slot name="left">
      <div class="nav-bar-left" @click="$emit('leftClick')">
        <h-icon color="var(--theme)" name="icon-right"></h-icon>
        <span>{{ leftText }}</span>
      </div>
    </slot>
    <div class="title">{{ title }}</div>
    <slot name="right">
      <div class="text-right" @click="$emit('rightClick')">
        {{ rightText }}
      </div>
    </slot>
  </div>
</template>

<style scoped lang="less">
  .nav-bar {
    height: 0.8rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background: white;
    .title {
      line-height: 0.8rem;
      width: 50%;
      position: absolute;
      inset: 0 25%;
      font-size: 0.3rem;
      text-align: center;
    }
    .nav-bar-left {
      color: var(--theme);
      display: flex;
      align-items: center;
      :deep(.icon__cont) {
        display: none;
        transform: rotate(-180deg);
      }
      &:active {
        opacity: 0.5;
      }
    }
    .text-right {
      color: var(--theme);
      &:active {
        opacity: 0.5;
      }
    }
  }

  .nav-bar[left-arrow] {
    .nav-bar-left {
      :deep(.icon__cont) {
        display: block;
      }
    }
  }
</style>
