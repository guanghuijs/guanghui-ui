<script lang="ts">
  export default {
    name: 'HNotify',
  };
</script>
<script lang="ts" setup>
  import { computed, onMounted, onUnmounted, ref, unref } from 'vue';

  const props = withDefaults(
    defineProps<{
      message?: string;
      wait?: number;
      bgColor?: string;
      type?: 'primary' | 'success' | 'warning' | 'danger';
      position?: 'top' | 'bottom';
    }>(),
    {
      message: '消息通知',
      wait: 2000,
      type: 'primary',
      position: 'top',
    }
  );

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

  const calcBgColor = computed<string>(() => {
    if (props.bgColor) {
      return props.bgColor;
    } else {
      if (props.type === 'primary') {
        return 'var(--theme)';
      } else if (props.type === 'success') {
        return '#07C160';
      } else if (props.type === 'warning') {
        return '#FF976A';
      } else if (props.type === 'danger') {
        return '#EE0A24';
      } else {
        return 'var(--theme)';
      }
    }
  });

  const calcY = computed<string>(() => {
    return props.position === 'top' ? 'translateY(-1rem)' : 'translateY(1rem)';
  });

  onUnmounted(() => {
    clearTimeout(unref(time));
  });
</script>

<template>
  <Transition>
    <div class="notify-main" :class="position" v-if="show">{{ message }}</div>
  </Transition>
</template>

<style lang="less" scoped>
  .v-enter-active,
  .v-leave-active {
    transition: all 0.25s ease;
  }

  .v-enter-from,
  .v-leave-to {
    transform: v-bind(calcY);
  }

  .notify-main {
    z-index: 10;
    width: 100vw;
    position: fixed;
    left: 0;
    font-size: 0.28rem;
    line-height: 0.6rem;
    background: v-bind(calcBgColor);
    color: white;
    text-align: center;
  }

  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }
</style>
