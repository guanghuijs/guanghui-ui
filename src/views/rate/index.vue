<script setup lang="ts">
  import { Rate } from '#/components/Rate';
  import { toast } from '#/components';
  import { ref, unref } from 'vue';

  const rate = ref(1);
  const fn = () => {
    toast({
      message: `评分为${unref(rate)}`,
    });
  };
</script>

<template>
  <h-card :title="`简单使用(${rate})`">
    <Rate v-model="rate"></Rate>
  </h-card>
  <h-card title="自定义评分大小">
    <Rate v-model="rate" :count="10"></Rate>
  </h-card>

  <h-card title="自定义图标">
    <Rate
      v-model="rate"
      void-icon="icon-flower_1"
      icon="icon-flower_1_act"
    ></Rate>
  </h-card>
  <h-card title="自定义图标大小">
    <Rate
      v-model="rate"
      void-icon="icon-love"
      icon="icon-love_act"
      size="0.8rem"
    ></Rate>
  </h-card>
  <h-card title="监听change事件">
    <Rate
      v-model="rate"
      void-icon="icon-love"
      icon="icon-love_act"
      @change="fn"
    ></Rate>
  </h-card>
  <h-card title="可取消模式">
    <Rate
      v-model="rate"
      void-icon="icon-love"
      icon="icon-love_act"
      @change="fn"
      :cancel-mode="true"
    ></Rate>
  </h-card>
</template>

<style scoped lang="less"></style>
