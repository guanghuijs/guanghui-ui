<script lang="ts">
  export default {
    name: 'HCountDown',
  };
</script>
<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import { useInterval } from '@vueuse/core';
  import { timeFormat, calcTime, propTimeFormat } from './utils';
  import type { CountDownProps } from './type';
  const props = withDefaults(
    defineProps<{
      time?: number | string;
      format?: string;
    }>(),
    {
      format: 'HH:mm:ss:SS',
    }
  );
  const PROPS = ref<CountDownProps>({
    time: propTimeFormat(props.time ? props.time : 0) as number,
    format: props.format,
  });
  const emits = defineEmits<{
    (
      e: 'register',
      methods: {
        resume: () => void;
        pause: () => void;
        setProps: (props: any) => void;
      }
    ): void;
  }>();
  const { pause, resume } = useInterval(10, {
    controls: true,
    immediate: true,
    callback: () => {
      if ((PROPS.value.time as number) > 0) {
        (PROPS.value.time as number)--;
      } else {
        pause();
      }
    },
  });
  const calTimeFormat = computed(() => {
    return timeFormat(PROPS.value.time as number, PROPS.value.format);
  });
  onMounted(() => {
    emits('register', {
      resume: () => {
        resume();
      },
      pause: () => {
        pause();
      },
      setProps: async (countProps: CountDownProps) => {
        PROPS.value = Object.assign(PROPS, countProps);
        const { time } = countProps;
        if (typeof time === 'string') {
          if (time.endsWith('m')) {
            PROPS.value.time =
              Number(time.slice(0, time.length - 1)) * 60 * 1000;
          } else if (time.endsWith('h')) {
            PROPS.value.time =
              Number(time.slice(0, time.length - 1)) * 3600 * 1000;
          }
        } else {
          PROPS.value.time = time * 1000;
        }
      },
    });
  });
</script>

<template>
  <slot v-bind="calcTime(PROPS.time)">
    <div>{{ calTimeFormat }}</div>
  </slot>
</template>
