<script setup lang="ts">
  import { useCountDown } from '@ghui/components';
  const [register, { resume, pause }] = useCountDown({
    time: '30m',
  });
</script>

<template>
  <h-card title="基础用法">
    <h-count-down :time="6000"></h-count-down>
  </h-card>
  <h-card title="自定义格式">
    <h-count-down :time="600" format="mm:ss:SS" />
  </h-card>
  <h-card title="通过插槽自定义样式">
    <h-count-down :time="600">
      <template v-slot="{ hour, minute, second, millisecond }">
        <div class="timer">
          <span>{{ hour }}</span>
          :<span>{{ minute }}</span> :<span>{{ second }}</span> :<span>{{
            millisecond
          }}</span>
        </div>
      </template>
    </h-count-down>
  </h-card>
  <h-card title="参数格式化(m表示分钟,h表示小时)">
    <h-count-down time="5m" format="HH:mm:ss" />
    <h-count-down time="5h" format="HH:mm:ss" />
  </h-card>
  <h-card title="使用钩子函数控制">
    <h-count-down @register="register" />
    <h-button @click="resume" type="primary">resume</h-button>
    <h-button @click="pause" type="warning">pause</h-button>
  </h-card>
</template>

<style scoped lang="less">
  .timer {
    display: flex;
    line-height: 30px;
    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: red;
      color: white;
      border-radius: 5px;
      margin: 0 5px;
      text-align: center;
    }
  }
</style>
