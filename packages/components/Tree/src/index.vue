<script lang="ts">
  export default {
    name: 'HTree',
  };
</script>
<script lang="ts" setup>
  import { ref } from 'vue';

  const props = defineProps<{
    threeData: any;
  }>();

  const open = ref(false);

  const calIsOpen = () => {
    return props.threeData.children && props.threeData.children.length;
  };

  const toggle = () => {
    open.value = !open.value;
  };
</script>

<template>
  <div class="tree">
    <div class="tree-tit flex-star">
      <span>{{ threeData.name }}</span>
      <span v-if="calIsOpen()" @click="toggle">[{{ open ? '-' : '+' }}]</span>
    </div>
    <div class="tree-count" v-if="calIsOpen()" v-show="open">
      <HTree
        v-for="(data, index) in threeData.children"
        :key="index"
        :threeData="data"
      ></HTree>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .tree {
    display: flex;
    align-items: center;
    .tree-tit {
    }
    .tree-count {
      padding-left: 10px;
    }
  }
</style>
