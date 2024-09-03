<script lang="ts">
  export default {
    name: 'HSwitch',
  };
</script>
<script setup lang="ts">
  import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{
      value: boolean;
      size?: number;
      theme?: string;
    }>(),
    {
      size: 30,
      theme: '#eee',
    }
  );

  const { width, height, btnSize, left, size } = computed(() => {
    const { size } = props;
    return {
      size: `${size}px`,
      width: `${2 * size}px`,
      height: `${size}px`,
      btnSize: `${size - 4}px`,
      left: `calc(100% - ${size - 2}px)`,
    };
  }).value;

  defineEmits<{
    (e: 'update:value', value: boolean): boolean;
  }>();
</script>

<template>
  <div
    class="gHui-component"
    :class="value ? 'act' : ''"
    @click="$emit('update:value', !value)"
  >
    <Transition>
      <div v-show="!value" class="gHui-switch-close-bg"></div>
    </Transition>
    <div class="gHui-switch-button"></div>
  </div>
</template>

<style scoped lang="less">
  .gHui-component {
    display: inline-block;
    height: v-bind(height);
    width: v-bind(width);
    background: v-bind(theme);
    position: relative;
    border-radius: 30px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    .gHui-switch-button {
      width: v-bind(btnSize);
      height: v-bind(btnSize);
      background: white;
      box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
      position: absolute;
      border-radius: 50%;
      top: 2px;
      left: 2px;
      transition: all 0.25s;
    }
    .gHui-switch-close-bg {
      background: white;
      width: 100%;
      height: 100%;
      border-radius: v-bind(size);
    }
  }

  .gHui-component.act {
    .gHui-switch-button {
      left: v-bind(left);
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    left: v-bind(width);
  }
</style>
