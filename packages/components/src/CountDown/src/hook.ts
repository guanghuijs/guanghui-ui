import { ref, unref, nextTick, onUnmounted, watch } from 'vue';
import type { CountDownProps, CountDownType, UseCountDownType } from './type';

export function useCountDown(props?: CountDownProps): UseCountDownType {
  const compRef = ref<CountDownType | null>(null);

  async function getCompRef(): Promise<CountDownType> {
    const comp = unref(compRef);
    console.log(comp);
    if (!comp) {
      console.error('尚未获得组件实例~');
    }
    await nextTick();
    return comp as CountDownType;
  }

  function register(instance: CountDownType) {
    onUnmounted(() => {
      compRef.value = null;
    });
    compRef.value = instance;
    watch(
      () => props,
      () => {
        props && instance.setProps(props);
      },
      {
        immediate: true,
        deep: true,
      }
    );
  }

  const methods: CountDownType = {
    /**
     * 继续
     */
    resume: async () => {
      const comp = await getCompRef();
      await comp.resume();
    },
    /**
     * 暂停
     */
    pause: async () => {
      const comp = await getCompRef();
      await comp.pause();
    },
    /**
     * 钩子设置属性
     * @param props
     */
    setProps: async (props) => {
      const comp = await getCompRef();
      await comp.setProps(props);
    },
  };

  return [register, methods];
}
