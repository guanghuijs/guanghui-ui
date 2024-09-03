<script lang="ts">
  export default {
    name: 'HCheckbox',
  };
</script>
<script setup lang="ts">
  import { Icon as HIcon } from '@ghui/components';
  const props = withDefaults(
    defineProps<{
      value?: boolean;
      theme?: string;
    }>(),
    {
      theme: '#ccc',
    }
  );

  const emits = defineEmits<{
    (e: 'update:value', flag: boolean): boolean;
    (e: 'callBack', flag: boolean): boolean;
  }>();

  const checkToggle = () => {
    emits('update:value', !props.value);
    emits('callBack', !props.value);
  };
</script>

<template>
  <div class="gHui-component" @click="checkToggle">
    <div class="gHui-checkbox">
      <h-icon
        name="icon-correct"
        v-show="value"
        color="#fff"
        size="16px"
      ></h-icon>
    </div>
    <div class="gHui-checkbox-label">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
  .gHui-component {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    .gHui-checkbox {
      height: 20px;
      width: 20px;
      border: 1px solid v-bind(theme);
      border-radius: 50%;
      display: inline-block;
      position: relative;
      font-size: 0;
      :deep(i) {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background: v-bind(theme) !important;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        box-sizing: border-box;
      }
    }
    .gHui-checkbox-label {
      display: inline-block;
    }
  }

  .gHui-component:active {
    .gHui-checkbox {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    }
  }
</style>
