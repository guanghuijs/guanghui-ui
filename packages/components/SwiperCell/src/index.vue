<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useSwiperCell } from './swiperCell';

  const swiperCellRef = ref();

  onMounted(() => {
    useSwiperCell(swiperCellRef.value);
  });
</script>

<template>
  <div ref="swiperCellRef" class="swiper-cell">
    <div class="swiper-cell-btn">
      <slot name="opt"> </slot>
    </div>
    <div class="swiper-cell-content">
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped lang="less">
  .swiper-cell {
    height: 0.8rem;
    background: white;
    position: relative;
    overflow: hidden;
    .swiper-cell-content {
      transition: all 0.25s;
      position: relative;
      width: 100%;
      height: 0.8rem;
    }
    .swiper-cell-btn {
      display: flex;
      align-items: center;
      height: 0.8rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
</style>
