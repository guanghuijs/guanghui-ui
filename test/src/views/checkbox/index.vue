<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(false);
</script>

<template>
  <h-card :title="`复选框${value}`">
    <h-checkbox v-model:value="value" />
  </h-card>
  <h-card title="自定义主题">
    <h-checkbox v-model:value="value" theme="pink" />
    <h-checkbox v-model:value="value" theme="red" />
    <h-checkbox v-model:value="value" theme="gold" />
  </h-card>

  <h-card title="自定义label">
    <div class="check-item">
      <h-checkbox v-model:value="value" theme="pink">
        <div class="label">啦啦啦</div>
      </h-checkbox>
    </div>
    <div class="check-item">
      <h-checkbox v-model:value="value" theme="pink">
        <div class="label">啦啦啦</div>
        <div class="label">我是卖包的小行家</div>
      </h-checkbox>
    </div>
  </h-card>
</template>

<style scoped lang="less">
  .check-item {
    padding: 10px 0;
    .label {
      padding: 0 10px;
    }
  }
</style>
