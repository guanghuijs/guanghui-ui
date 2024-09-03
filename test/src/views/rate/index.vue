<script setup lang="ts">
  import { toast } from '@ghui/components';
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
    <h-rate v-model="rate" />
  </h-card>
  <h-card title="自定义评分大小">
    <h-rate v-model="rate" :count="10" />
  </h-card>
  <h-card title="自定义图标">
    <h-rate v-model="rate" void-icon="icon-flower_1" icon="icon-flower_1_act" />
  </h-card>
  <h-card title="自定义图标大小">
    <h-rate
      v-model="rate"
      void-icon="icon-love"
      icon="icon-love_act"
      size="0.8rem"
    />
  </h-card>
  <h-card title="监听change事件">
    <h-rate
      v-model="rate"
      void-icon="icon-love"
      icon="icon-love_act"
      @change="fn"
    />
  </h-card>
  <h-card title="可取消模式">
    <h-rate
      v-model="rate"
      void-icon="icon-love"
      icon="icon-love_act"
      @change="fn"
      :cancel-mode="true"
    />
  </h-card>
</template>

<style scoped lang="less"></style>
