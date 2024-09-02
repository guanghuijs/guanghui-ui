<script setup lang="ts">
  import { metaRoutes } from '@/router';
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const router = useRouter();
  const open = ref(false);

  const changeRouter = (routeName: string | symbol) => {
    router.push({ name: routeName });
    open.value = false;
  };
</script>

<template>
  <div class="nav-bar">
    <h-icon name="icon-menu" @click="open = true"></h-icon>
    <div class="nav-bar-title">{{ useRoute().meta.title }}</div>
  </div>
  <h-popup v-model:open="open" position="left">
    <div class="menu">
      <div class="title">demo</div>
      <div
        class="nav-item"
        v-for="item in metaRoutes.filter(({ meta }) => meta?.type === 'demo')"
        :key="item.name"
        :class="useRoute().name === item.name ? 'act' : ''"
        @click="changeRouter(item.name!)"
      >
        {{ item.meta.title }}
      </div>
      <div class="title">组件</div>
      <div
        class="nav-item"
        v-for="item in metaRoutes.filter(
          ({ meta }) => meta?.type === 'component'
        )"
        :key="item.name"
        :class="useRoute().name === item.name ? 'act' : ''"
        @click="changeRouter(item.name!)"
      >
        {{ item.meta.title }}
      </div>
    </div>
  </h-popup>
  <router-view />
</template>

<style scoped lang="less">
  .nav-bar {
    display: flex;
    align-items: center;
    height: 0.8rem;
    background: white;
    position: sticky;
    padding: 0 0.25rem;
    top: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 2;
    :deep(.icon__cont) {
      position: relative;
      z-index: 1;
    }
    .nav-bar-title {
      line-height: 0.8rem;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
    }
  }
  .menu {
    height: 100%;
    overflow-y: scroll;
    .title {
      font-size: 0.3rem;
      font-weight: bold;
      padding: 0.2rem 0 0.2rem 0.3rem;
      position: sticky;
      top: 0;
      background: white;
      border-top: 1px solid #f2f2f2;
      border-bottom: 1px solid #f2f2f2;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    .nav-item {
      line-height: 0.7rem;
      padding: 0 0.2rem;
    }
    .act {
      background: pink;
      color: white;
    }
  }
</style>
