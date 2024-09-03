<template>
  <HCard title="图形验证码">
    <VerificationCode ref="codeRef"></VerificationCode>
  </HCard>
  <h-button block @click="getCode">获取验证码</h-button>
</template>
<script lang="ts" setup>
  import { ref, unref } from 'vue';
  import { toast } from 'guanghui-ui';
  import type { TVerificationCode } from 'guanghui-ui/type';
  const codeRef = ref<TVerificationCode | null>();
  const getCode = () => {
    const code = unref(codeRef)?.getCode();
    toast({
      message: code as string,
    });
  };
</script>
