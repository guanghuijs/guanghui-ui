<template>
  <Transition>
    <div class="toast-out" v-if="show">
      <div class="toast-main">
        <i v-if="icon" :class="`iconfont icon-${icon}`"></i>
        <p>{{ message }}</p>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
  import { onMounted, onUnmounted, ref, unref } from 'vue';
  const props = defineProps({
    message: {
      type: String,
      default: '轻提示',
    },
    icon: String,
    wait: {
      type: Number,
      default: 2000,
    },
  });

  const time = ref();
  const show = ref<boolean>(false);

  onMounted(() => {
    show.value = true;
    if (props.wait !== -1) {
      time.value = setTimeout(() => {
        show.value = false;
      }, props.wait);
    }
  });

  onUnmounted(() => {
    clearTimeout(unref(time));
  });
</script>
<style lang="less" scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .toast-out {
    z-index: 10;
    pointer-events: none;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .toast-main {
      padding: 0.15rem 0.3rem;
      display: inline-block;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border-radius: 4px;
      text-align: center;
      i {
        font-size: 0.5rem;
        margin-bottom: 0.15rem;
        color: white;
      }
      p {
        color: white;
      }
    }
  }
</style>
