<!--折叠面板-->
<script setup lang="ts">
  import { getCurrentInstance, onMounted, provide, ref } from 'vue';
  import type { CollapseActive } from './type';

  const instance = ref();

  const props = withDefaults(
    defineProps<{
      active?: CollapseActive;
      accordion?: boolean;
    }>(),
    {
      active: '0',
      accordion: false,
    }
  );

  const emits = defineEmits<{
    (e: 'update:active', value: CollapseActive): void;
  }>();

  const updateActive = (active: CollapseActive) => {
    console.log(instance.value);
    if (props.accordion) {
      instance.value?.slots.default!().forEach((item: any) => {
        console.log(item);
      });
    }
    emits('update:active', active);
  };

  onMounted(() => {
    instance.value = getCurrentInstance();
  });

  provide('activeKey', { active: props.active, accordion: props.accordion });

  defineExpose({
    updateActive,
  });
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
  .container {
    background: white;
    & :deep(.collapse-item:not(:nth-child(1))) {
      border-top: 1px solid #f2f2f2;
    }
  }
</style>
