<script setup lang="ts">
  import { ref } from 'vue';
  const imagesList = ref<string[]>([]);

  withDefaults(
    defineProps<{
      fileLength?: number;
    }>(),
    {
      fileLength: 1,
    }
  );

  const fn = (e: Event) => {
    // const reader = new FileReader();
    // reader.readAsDataURL((e.target as any).files[0]);
    // reader.onloadend = function (ev: any) {
    //   console.log(ev.target.result);
    // };
    console.log((e.target as any).files[0]);
    imagesList.value.push(URL.createObjectURL((e.target as any).files[0]));
  };
</script>

<template>
  <div class="comp-container">
    <img v-for="img in imagesList" :key="img" :src="img" />
    <div class="upload" v-if="imagesList.length <= fileLength - 1">
      <input type="file" @change="fn" accept=".jpg,.jpeg,.png" />
      <img src="./upload_tips.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="less">
  .comp-container {
    display: grid;
    grid-template-columns: repeat(4, calc((100% - 0.6rem) / 4));
    gap: 0.2rem;
    > img {
      width: 100%;
      height: 1.6rem;
      object-fit: cover;
      border-radius: 0.16rem;
    }
    .upload {
      width: 100%;
      height: 100%;
      border-radius: 0.1rem;
      min-height: 1.6rem;
      background: #f7f8fa;
      text-align: center;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        inset: 0;
      }
      img {
        width: 40%;
      }
    }
  }
</style>
