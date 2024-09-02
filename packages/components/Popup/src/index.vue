<script lang="ts">
  export default {
    name: 'HPopup',
  };
</script>
<script setup lang="ts">
  import { Icon as HIcon } from '#/components';
  withDefaults(
    defineProps<{
      open: boolean;
      position?: 'bottom' | 'left' | 'top' | 'right';
      width?: string;
      height?: string;
    }>(),
    {
      position: 'bottom',
      width: '50vw',
      height: '50vh',
    }
  );
</script>

<template>
  <div>
    <div class="shade" v-if="open" @click="$emit('update:open', false)"></div>
    <Transition :name="position">
      <div class="popup" :class="position" v-if="open" v-bind="$attrs">
        <slot name="closeIcon">
          <div class="popup-close">
            <h-icon
              @click="$emit('update:open', false)"
              name="icon-close"
            ></h-icon>
          </div>
        </slot>
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="less">
  .shade {
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    animation: shade 0.5s linear;
    background: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0;
  }

  @keyframes shade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .popup {
    background: white;
    z-index: 10;
    position: fixed;
    transition: height 0.25s;
    .popup-close {
      display: none;
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .popup-close:active {
      color: pink;
    }
  }

  .popup[closeable] {
    .popup-close {
      display: block;
    }
  }

  .popup.bottom {
    border-radius: 8px 8px 0 0;
    width: 100vw !important;
    height: v-bind(height);
    bottom: 0;
  }

  .popup.top {
    border-radius: 0 0 8px 8px;
    width: 100vw !important;
    height: v-bind(height);
    top: 0;
  }

  .popup.left {
    width: v-bind(width);
    height: 100vh !important;
    top: 0;
    left: 0;
  }

  .popup.right {
    width: v-bind(width);
    height: 100vh !important;
    top: 0;
    right: 0;
  }

  .bottom-enter-active,
  .bottom-leave-active {
    transition: all 0.25s ease;
  }

  .bottom-enter-from,
  .bottom-leave-to {
    transform: translateY(100vw);
    opacity: 0;
  }

  .top-enter-active,
  .top-leave-active {
    transition: all 0.25s ease;
  }

  .top-enter-from,
  .top-leave-to {
    transform: translateY(-100vh);
    opacity: 0;
  }

  .left-enter-active,
  .left-leave-active {
    transition: all 0.25s ease;
  }

  .left-enter-from,
  .left-leave-to {
    transform: translateX(-100vh);
    opacity: 0;
  }

  .right-enter-active,
  .right-leave-active {
    transition: all 0.25s ease;
  }

  .right-enter-from,
  .right-leave-to {
    transform: translateX(100vh);
    opacity: 0;
  }
</style>
