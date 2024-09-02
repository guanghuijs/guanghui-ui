<script setup lang="ts">
  import { useCountDown } from 'guanghui-ui';
  const [register, { resume, pause }] = useCountDown({
    time: '30m',
  });
</script>

<template>
  <h-card title="基础用法">
    <h-count-down :time="6000"></h-count-down>
  </h-card>
  <h-card title="自定义格式">
    <HCountDown :time="600" format="mm:ss:SS" />
  </h-card>
  <h-card title="通过插槽自定义样式">
    <HCountDown :time="600">
      <template v-slot="{ hour, minute, second, millisecond }">
        <div class="timer">
          <span>{{ hour }}</span>
          :<span>{{ minute }}</span> :<span>{{ second }}</span> :<span>{{
            millisecond
          }}</span>
        </div>
      </template>
    </HCountDown>
  </h-card>
  <HCard title="参数格式化(m表示分钟,h表示小时)">
    <HCountDown time="5m" format="HH:mm:ss" />
    <HCountDown time="5h" format="HH:mm:ss" />
  </HCard>
  <HCard title="使用钩子函数控制">
    <HCountDown @register="register" />
    <HButton @click="resume" type="primary">resume</HButton>
    <HButton @click="pause" type="warning">pause</HButton>
  </HCard>
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
