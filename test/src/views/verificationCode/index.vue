<template>
  <h-card title="图形验证码">
    <h-verification-code ref="codeRef"></h-verification-code>
  </h-card>
  <h-button block @click="getCode">获取验证码</h-button>
</template>
<script lang="ts" setup>
  import { ref, unref } from 'vue';
  import { toast } from '@ghui/components';
  import type { TVerificationCode } from '@ghui/components';
  const codeRef = ref<TVerificationCode | null>();
  const getCode = () => {
    const code = unref(codeRef)?.getCode();
    toast({
      message: code as string,
    });
  };
</script>
