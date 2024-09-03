<script setup lang="ts">
  import { mock } from 'mockjs';
  import { onMounted, ref } from 'vue';
  import { useSwiper } from './swiper';

  const wrapRef = ref();
  onMounted(() => {
    useSwiper(wrapRef.value);
  });
</script>

<template>
  <div class="swiper">
    <div class="swipe-items-wrap" ref="wrapRef">
      <div
        class="swiper-slider"
        v-for="i in 5"
        :style="{ background: mock('@color') }"
        :key="i"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .swiper {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    .swipe-items-wrap {
      position: relative;
      overflow: hidden;
      height: 100%;
      .swiper-slider {
        position: absolute;
        width: 100%;
        height: 100%;
        display: none;
      }
      .swiper-slider.act {
        display: block;
      }
    }
  }
</style>
