<script setup lang="ts">
  import { toast, hiddenToast } from 'guanghui-ui';
</script>

<template>
  <h-card title="基础用法">
    <h-button @click="toast({ message: '提示' })">按钮</h-button>
  </h-card>
  <h-card title="使用图标">
    <h-button @click="toast({ message: '成功提示', icon: 'correct' })">
      按钮
    </h-button>
  </h-card>
  <h-card title="跟隐藏钩子函数配合使用">
    <h-button
      @click="toast({ message: '成功提示', icon: 'correct', wait: -1 })"
    >
      点击一直显示
    </h-button>
    <h-button @click="hiddenToast()"> 销毁 </h-button>
  </h-card>
</template>
