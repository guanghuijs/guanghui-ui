<script lang="ts" setup>
  import { ref } from 'vue';
  import { mock } from 'mockjs';
  const value = ref(40);
</script>

<template>
  <h-card title="设置进度">
    <h-progress-bar v-model:value="value" />
    <div>
      <h-button @click="value = mock({ 'm|1-100': 0 }).m">随机进度</h-button>
    </div>
  </h-card>
  <h-card title="大小、颜色、宽度设置">
    <h-progress-bar v-model:value="value" color="red" :size="70" />
    <h-progress-bar
      v-model:value="value"
      bg-color="black"
      color="red"
      :size="100"
    />
    <h-progress-bar v-model:value="value" :width="20" :size="150" />
  </h-card>
  <h-card title="普通进度条">
    <h-progress-bar v-model:value="value" :line="true" />
  </h-card>
</template>
