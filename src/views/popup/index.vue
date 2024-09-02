<template>
  <h-card title="不同方向">
    <h-button @click="bottomOpen = true">下</h-button>
    <h-button @click="topOpen = true">上</h-button>
    <h-button @click="leftOpen = true">左</h-button>
    <h-button @click="rightOpen = true">右</h-button>
  </h-card>
  <h-card title="自定义宽高">
    <h-button @click="heightOpen = true">200px</h-button>
  </h-card>
  <h-card title="带关闭图标">
    <h-button @click="closeableOpen = true" />
  </h-card>
  <h-card title="自定义内容填充&高度由内容撑开">
    <h-button @click="contentOpen = true" />
  </h-card>
  <h-popup v-model:open="leftOpen" position="left"> </h-popup>
  <h-popup v-model:open="rightOpen" position="right"> </h-popup>
  <h-popup v-model:open="bottomOpen" position="bottom"> </h-popup>
  <h-popup v-model:open="topOpen" position="top"> </h-popup>
  <h-popup v-model:open="heightOpen" position="bottom" height="200px">
  </h-popup>
  <h-popup v-model:open="closeableOpen" closeable></h-popup>
  <h-popup v-model:open="contentOpen" height="auto">
    <div style="padding: 15px">我系渣渣辉</div>
  </h-popup>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const leftOpen = ref(false);
  const rightOpen = ref(false);
  const bottomOpen = ref(false);
  const topOpen = ref(false);
  const closeableOpen = ref(false);
  const contentOpen = ref(false);
  const heightOpen = ref(false);
</script>
