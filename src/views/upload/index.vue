<script setup lang="ts"></script>

<template>
  <h-card title="文件上传,默认只能传一张">
    <h-upload />
  </h-card>
  <h-card title="指定可传文件数">
    <h-upload :file-length="8" />
  </h-card>
</template>

<style scoped lang="less"></style>
