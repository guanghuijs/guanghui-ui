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
  <div v-bind="$attrs" class="loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="less" scoped>
  .loading,
  .loading > div {
    position: relative;
    box-sizing: border-box;
  }

  .loading {
    display: inline-block;
    font-size: 0;
  }

  .loading.la-dark {
  }

  .loading > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
    color: v-bind(color);
  }

  .loading {
    width: 0.4rem;
    height: 0.4rem;
    animation: line-spin-clockwise-fade-rotating-rotate 6s infinite linear;
  }

  .loading > div {
    position: absolute;
    width: 1px;
    height: 0.14rem;
    margin: -5px 2px 2px -1px;
    border-radius: 0;
    animation: line-spin-clockwise-fade-rotating 1s infinite ease-in-out;
  }

  .loading > div:nth-child(1) {
    top: 15%;
    left: 50%;
    transform: rotate(0deg);
    animation-delay: -0.875s;
  }

  .loading > div:nth-child(2) {
    top: 25.2512626585%;
    left: 74.7487373415%;
    transform: rotate(45deg);
    animation-delay: -0.75s;
  }

  .loading > div:nth-child(3) {
    top: 50%;
    left: 85%;
    transform: rotate(90deg);
    animation-delay: -0.625s;
  }

  .loading > div:nth-child(4) {
    top: 74.7487373415%;
    left: 74.7487373415%;
    transform: rotate(135deg);
    animation-delay: -0.5s;
  }

  .loading > div:nth-child(5) {
    top: 84.9999999974%;
    left: 50.0000000004%;
    transform: rotate(180deg);
    animation-delay: -0.375s;
  }

  .loading > div:nth-child(6) {
    top: 74.7487369862%;
    left: 25.2512627193%;
    transform: rotate(225deg);
    animation-delay: -0.25s;
  }

  .loading > div:nth-child(7) {
    top: 49.9999806189%;
    left: 15.0000039834%;
    transform: rotate(270deg);
    animation-delay: -0.125s;
  }

  .loading > div:nth-child(8) {
    top: 25.2506949798%;
    left: 25.2513989292%;
    transform: rotate(315deg);
    animation-delay: 0s;
  }

  .loading.la-sm {
    width: 16px;
    height: 16px;
  }

  .loading.la-sm > div {
    width: 1px;
    height: 4px;
    margin-top: -2px;
    margin-left: 0;
  }

  .loading.la-2x {
    width: 64px;
    height: 64px;
  }

  .loading.la-2x > div {
    width: 4px;
    height: 20px;
    margin-top: -10px;
    margin-left: -2px;
  }

  .loading.la-3x {
    width: 96px;
    height: 96px;
  }

  .loading.la-3x > div {
    width: 6px;
    height: 30px;
    margin-top: -15px;
    margin-left: -3px;
  }

  @keyframes line-spin-clockwise-fade-rotating-rotate {
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes line-spin-clockwise-fade-rotating {
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
</style>
