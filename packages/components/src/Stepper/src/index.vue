<script lang="ts">
  export default {
    name: 'HStepper',
  };
</script>
<script setup lang="ts">
  import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{
      value: number;
      step?: number;
      range?: [number, number];
      theme?: string;
    }>(),
    {
      step: 1,
      range: () => [0, Infinity],
      theme: '#bbb',
    }
  );

  const emits = defineEmits<{
    (e: 'update:value', value: number): number;
  }>();

  const isDisable = computed<{
    prevDisable: boolean;
    afterDisable: boolean;
  }>(() => {
    const { value, step, range } = props;
    const prevDisable = value - step < range[0];
    const afterDisable = value + step > range[1];
    return {
      prevDisable,
      afterDisable,
    };
  });

  const reduce = () => {
    const { value, step, range } = props;
    if (value - step < range[0]) {
      return;
    }
    emits('update:value', value - step);
  };

  const add = () => {
    const { value, step, range } = props;
    if (value + step > range[1]) {
      return;
    }
    emits('update:value', value + step);
  };
</script>

<template>
  <div class="gHui-stepper">
    <div class="stepper-content flex-between">
      <span @click="reduce" :class="isDisable.prevDisable ? 'disable' : ''"
        >-</span
      >
      <div>{{ value }}</div>
      <span @click="add" :class="isDisable.afterDisable ? 'disable' : ''"
        >+</span
      >
    </div>
  </div>
</template>

<style scoped lang="less">
  .gHui-stepper {
    user-select: none;
    display: inline-block;
    div.stepper-content {
      span {
        color: v-bind(theme);
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 18px;
        border: 1px solid v-bind(theme);
        border-radius: 4px;
        cursor: pointer;
      }
      span.disable {
        opacity: 0.2;
      }
      div {
        padding: 0 5px;
      }
    }
  }
</style>
