<script lang="ts">
  export default {
    name: 'HIcon',
  };
</script>
<script setup lang="ts">
  import { computed } from 'vue';
  const props = withDefaults(
    defineProps<{
      name: string;
      size?: number | string;
      color?: string;
    }>(),
    {
      size: '0.28rem',
      color: '#333',
    }
  );

  defineEmits<{
    (e: 'iconClick'): void;
  }>();

  const calStyle = computed(() => {
    return {
      fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
      color: props.color,
    };
  });
</script>

<template>
  <div class="icon__cont" @click="$emit('iconClick')">
    <slot>
      <i class="iconfont" :class="name" :style="calStyle"></i>
    </slot>
    <span></span>
    <div class="badge">{{ $attrs.badge }}</div>
  </div>
</template>

<style scoped lang="less">
  .icon__cont {
    position: relative;
    display: inline-block;
    span,
    .badge {
      display: none;
      width: 5px;
      height: 5px;
      position: absolute;
      right: -2px;
      top: 4px;
      border-radius: 50%;
      background: red;
    }
    .badge {
      width: 16px;
      height: 16px;
      color: white;
      font-size: 8px;
      text-align: center;
      line-height: 16px;
      transform: scale(0.5) translate(70%, -70%);
    }
  }
  .icon__cont[dot] {
    span {
      display: block;
    }
  }

  .icon__cont[badge] .badge {
    display: block;
  }
</style>
<style src="./icon.less" scoped></style>
