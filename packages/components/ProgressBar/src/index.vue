<script lang="ts">
  export default {
    name: 'HProgressBar',
  };
</script>
<script setup lang="ts">
  import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{
      value?: number;
      size?: number;
      color?: string;
      bgColor?: string;
      width?: number;
      height?: string;
      line?: boolean;
    }>(),
    {
      value: 50,
      size: 150,
      color: 'pink',
      bgColor: '#eee',
      width: 10,
      height: '10px',
      line: false,
    }
  );

  const dasharray = computed<string>(() => {
    return `${props.value * Math.PI * 2} 1000`;
  });
</script>

<template>
  <svg
    v-if="!line"
    :width="size"
    :height="size"
    viewBox="0 0 220 220"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50%" cy="50%" r="100"></circle>
    <circle
      r="100"
      class="prevCircle"
      transform="translate(110,110) rotate(-90)"
    ></circle>
    <text
      text-anchor="middle"
      dominant-baseline="middle"
      y="50%"
      x="50%"
      style="font-size: 32px"
      :fill="color"
    >
      {{ value }}%
    </text>
  </svg>
  <svg v-else width="100%" :height="height">
    <line
      x1="10"
      :y1="`calc(${height} / 2)`"
      x2="calc(100% - 10px)"
      :y2="`calc(${height} / 2)`"
    />
    <line
      class="prevLine"
      x1="10"
      :y1="`calc(${height} / 2)`"
      :x2="`calc(${value}% - 10px)`"
      :y2="`calc(${height} / 2)`"
    />
  </svg>
</template>

<style scoped lang="less">
  circle {
    fill: none;
    stroke-width: v-bind(width);
    stroke: v-bind(bgColor);
  }

  .prevCircle {
    fill: none;
    transition: all 0.25s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    stroke: v-bind(color);
    stroke-dasharray: v-bind(dasharray) 1000;
    stroke-linecap: round;
  }

  line {
    stroke: v-bind(bgColor);
    stroke-linecap: round; //直线圆角
    stroke-width: v-bind(height);
    fill: none;
  }

  .prevLine {
    transition: all 0.25s;
    stroke: v-bind(color);
  }
</style>
