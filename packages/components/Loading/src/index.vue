<script lang="ts">
  export default {
    name: 'HLoading',
  };
</script>
<script setup lang="ts">
  import Spinner from './spinner.vue';
  import Circular from './circular.vue';

  const props = withDefaults(
    defineProps<{
      type?: 'circular' | 'spinner';
      color?: string;
    }>(),
    {
      type: 'circular',
      color: '#999',
    }
  );
</script>

<template>
  <circular :color="color" v-if="type === 'circular'" />
  <spinner :color="color" v-else />
</template>

<style scoped lang="less"></style>
