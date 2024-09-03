<script lang="ts">
  export default {
    name: 'HRate',
  };
</script>
<script setup lang="ts">
  import { Icon as HIcon } from '@ghui/components';
  import { watch } from 'vue';

  const emits = defineEmits<{
    (e: 'change', value: number): void;
    (e: 'update:modelValue', value: number): void;
  }>();

  const props = withDefaults(
    defineProps<{
      modelValue: number;
      size?: number | string;
      voidIcon?: string;
      icon?: string;
      voidColor?: string;
      color?: string;
      count?: number;
      cancelMode?: boolean;
    }>(),
    {
      count: 5,
      voidIcon: 'icon-star_1_act',
      icon: 'icon-star_1_act',
      voidColor: '#aaa',
      color: 'var(--theme)',
      size: '0.4rem',
      cancelMode: false,
    }
  );

  watch(
    () => props.modelValue,
    (value: number) => {
      emits('update:modelValue', value);
    }
  );

  const iconClick = (i: number) => {
    if (i !== props.modelValue) {
      emits('update:modelValue', i);
      emits('change', i);
    } else {
      if (props.cancelMode) {
        emits('update:modelValue', i - 1);
        emits('change', i - 1);
      }
    }
  };
</script>

<template>
  <div class="container">
    <HIcon
      v-for="i in count"
      :name="i <= modelValue ? icon : voidIcon"
      :color="i <= modelValue ? color : voidColor"
      :size="size"
      @click="iconClick(i)"
      :key="i"
    ></HIcon>
  </div>
</template>

<style scoped lang="less">
  .container {
    i {
      font-size: v-bind(size);
    }
  }
</style>
