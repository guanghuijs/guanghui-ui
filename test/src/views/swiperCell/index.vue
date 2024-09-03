<template>
  <h-card title="swiperCell">
    <h-swiper-cell>
      <div class="content">
        <span>王尼玛</span>
        <div>09:20</div>
      </div>
      <template #opt>
        <div class="del">删除</div>
        <div class="details">详情</div>
      </template>
    </h-swiper-cell>
  </h-card>
  <h-card title="swiperCell">
    <h-swiper-cell>
      <div class="content">
        <span>王尼玛</span>
        <div>09:20</div>
      </div>
      <template #opt>
        <div class="del">删除</div>
        <div class="details">详情</div>
        <div class="haha">哈哈哈</div>
      </template>
    </h-swiper-cell>
  </h-card>
</template>

<style scoped lang="less">
  .content {
    height: 0.9rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .del,
  .haha,
  .details {
    width: 1rem;
    line-height: 0.9rem;
    text-align: center;
    background: red;
    color: white;
  }
  .details {
    background: yellow;
  }
  .haha {
    background: blue;
  }
</style>
