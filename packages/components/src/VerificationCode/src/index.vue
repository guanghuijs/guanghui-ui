<script lang="ts">
  export default {
    name: 'HVerificationCode',
  };
</script>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { mock } from 'mockjs';

  const props = defineProps<{ length?: number | undefined }>();

  const codeHtml = ref<string>('');

  const boxBg = ref(mock('@color'));

  let code = '';
  defineEmits(['getCode']);

  const verificationCodeInit = () => {
    codeHtml.value = '';
    code = '';
    boxBg.value = mock('@color');
    const pool = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ];
    for (let i = 0; i < (props.length || 4); i++) {
      const c = pool[mock({ 'num|0-35': 1 }).num];
      codeHtml.value += `<span style='display: inline-block;margin: 0 2px;color:${mock(
        '@color'
      )};font-size: ${mock({ 'num|14-18': 1 }).num}px;transform: rotate(${
        mock({ 'num|-30-30': 1 }).num
      }deg)'>${c}</span>`;
      code += c;
    }
  };

  defineExpose({
    verificationCodeInit,
    getCode: (): string => {
      return code;
    },
  });

  onMounted(() => {
    verificationCodeInit();
  });
</script>

<template>
  <div
    class="comp-main"
    :style="{ background: mock('@color') }"
    v-html="codeHtml"
    @click="verificationCodeInit"
  ></div>
</template>

<style lang="less" scoped>
  .comp-main {
    height: 40px;
    padding: 0 15px;
    display: inline-block;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    user-select: none;
    span {
      margin: 0 2px;
    }
  }
</style>
