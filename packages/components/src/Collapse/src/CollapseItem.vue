<script lang="ts">
  export default {
    name: 'HCollapseItem',
  };
</script>
<script setup lang="ts">
  import { Icon as HIcon } from '@ghui/components';
  import { inject, onMounted, ref, getCurrentInstance, watch } from 'vue';

  const parent = getCurrentInstance()?.parent;

  const props = withDefaults(
    defineProps<{
      title?: string;
      content?: string;
      name: string | number;
    }>(),
    {
      title: '标题',
      content: '内容',
    }
  );

  const expanded = ref(false);

  defineExpose({
    close: () => {
      expanded.value = false;
    },
  });

  watch(
    () => expanded.value,
    () => {
      console.log('expanded');
      parent?.exposed?.updateActive(props.name);
    }
  );
  onMounted(() => {
    if (!parent) new Error('collapse-item需要嵌套在collapse中使用');
    const { active, accordion } = inject('activeKey') as any;
    if (Array.isArray(active)) {
      if (active.findIndex((item) => item === props.name) !== -1) {
        expanded.value = true;
      }
    } else {
      if (active === props.name) {
        expanded.value = true;
      }
    }
  });
</script>

<template>
  <div class="collapse-item">
    <div class="title flex-between" @click="expanded = !expanded">
      <div>{{ title }}</div>
      <h-icon name="icon-right" size="0.28rem"></h-icon>
    </div>
    <Transition v-show="expanded">
      <div class="content">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="less">
  .title {
    background: white;
    padding: 0.1rem 0;
    position: relative;
    z-index: 1;
  }
  .content {
    position: relative;
    padding: 0.1rem 0;
    color: #999;
    font-size: 0.24rem;
    border-top: 1px solid #f2f2f2;
  }
</style>
