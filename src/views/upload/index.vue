<script setup lang="ts">
  import { Upload as HUpload } from '#/components';
  import HCard from '#/components/Card/src/index.vue';
</script>

<template>
  <h-card title="文件上传,默认只能传一张">
    <HUpload />
  </h-card>
  <h-card title="指定可传文件数">
    <HUpload :file-length="8" />
  </h-card>
</template>

<style scoped lang="less"></style>
