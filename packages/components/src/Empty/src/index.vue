<script lang="ts">
  export default {
    name: 'HEmpty',
  };
</script>
<script setup lang="ts">
  import NO_DATA from './NODATA.png';

  withDefaults(
    defineProps<{
      description?: string;
      image?: string;
      width?: string;
    }>(),
    {
      description: '暂无数据',
      width: '50%',
    }
  );
</script>

<template>
  <div class="comp-container">
    <img :src="image || NO_DATA" :style="{ width }" alt="" />
    <div class="description">{{ description }}</div>
  </div>
</template>

<style scoped lang="less">
  .comp-container {
    text-align: center;
    color: #999;
  }
</style>
