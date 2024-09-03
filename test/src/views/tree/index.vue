<template>
  <h-card title="树形图">
    <h-tree :three-data="treeData"></h-tree>
  </h-card>
</template>
<script lang="ts" setup>
  const treeData = {
    name: '1',
    children: [
      {
        name: '1-1',
        children: [],
      },
      {
        name: '1-2',
        children: [
          {
            name: '1-2-1',
            children: [],
          },
          {
            name: '1-2-2',
            children: [],
          },
        ],
      },
      {
        name: '1-3',
        children: [],
      },
      {
        name: '1-4',
        children: [],
      },
    ],
  };
</script>
