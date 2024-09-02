<script setup lang="ts">
  import { notify, hiddenNotify, Button as HButton } from '#/components';
  const baseFn = () => {
    notify({
      message: '通知',
    });
  };
  const typeFn = (
    _: MouseEvent,
    type?: 'primary' | 'success' | 'warning' | 'danger'
  ) => {
    notify({
      message: '通知',
      type,
    });
  };

  const bgFn = (_: MouseEvent, bgColor: string) => {
    notify({
      message: '通知',
      bgColor,
    });
  };

  const positionFn = (_: MouseEvent, position: 'top' | 'bottom') => {
    notify({
      message: '通知',
      position,
    });
  };

  const waitFn = (_: MouseEvent, wait: number) => {
    notify({
      message: '通知',
      wait,
    });
  };
</script>

<template>
  <h-card title="基础用法">
    <h-button @click="baseFn">按钮</h-button>
  </h-card>
  <h-card title="使用类型预设">
    <h-space :size="10">
      <h-button @click="typeFn">主要通知</h-button>
      <h-button @click="typeFn($event, 'success')">成功通知</h-button>
      <h-button @click="typeFn($event, 'warning')">警告通知</h-button>
      <h-button @click="typeFn($event, 'danger')">错误通知</h-button>
    </h-space>
  </h-card>
  <h-card title="自定义背景">
    <h-space :size="10">
      <h-button @click="bgFn($event, 'red')">红色</h-button>
      <h-button @click="bgFn($event, 'blue')">蓝色</h-button>
      <h-button @click="bgFn($event, 'gold')">金黄色</h-button>
    </h-space>
  </h-card>
  <h-card title="自定义位置">
    <h-space :size="10">
      <h-button @click="positionFn($event, 'top')">顶部弹出</h-button>
      <h-button @click="positionFn($event, 'bottom')">底部弹出</h-button>
    </h-space>
  </h-card>
  <h-card title="自定消失时间">
    <h-space :size="10">
      <h-button @click="waitFn($event, 500)">0.5s</h-button>
      <h-button @click="waitFn($event, 1000)">1s</h-button>
      <h-button @click="waitFn($event, -1)">不消失</h-button>
    </h-space>
  </h-card>
  <h-card title="配合隐藏钩子函数一起使用">
    <h-space :size="10">
      <h-button @click="waitFn($event, -1)">不消失</h-button>
      <h-button @click="hiddenNotify">消失</h-button>
    </h-space>
  </h-card>
</template>

<style scoped lang="less">
  :deep(.btn) {
    font-size: 0.24rem;
    padding: 0.05rem 0.1rem;
    white-space: nowrap;
  }
</style>
