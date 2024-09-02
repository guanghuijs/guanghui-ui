<script setup lang="ts">
  import { toast } from 'guanghui-ui';
  import { NavBar as HNavBar } from '#/components';
</script>

<template>
  <h-card title="基础用法" concise>
    <HNavBar title="标题" />
  </h-card>
  <h-card title="返回按钮" concise>
    <HNavBar title="标题" left-arrow />
  </h-card>
  <h-card title="自定义左右文字" concise>
    <HNavBar left-text="返回" title="标题" right-text="提交" left-arrow />
  </h-card>
  <h-card title="左右侧文字点击事件" concise>
    <HNavBar
      @left-click="toast({ message: '点击返回' })"
      @right-click="toast({ message: '提交' })"
      left-text="返回"
      title="标题"
      right-text="提交"
      left-arrow
    />
  </h-card>
</template>

<style scoped lang="less"></style>
