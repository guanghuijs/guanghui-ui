<script lang="ts">
  export default {
    name: 'HCalendar',
  };
</script>
<script setup lang="ts">
  import { weeks, DateHelper } from './helper';
  import { computed, ref, unref, watch } from 'vue';
  import { toast } from '../../Toast';

  const props = defineProps<{
    modelValue?: string;
  }>();

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  const _date = ref(new Date(props.modelValue || new Date()));

  watch(
    () => props.modelValue,
    () => {
      _date.value = new Date(props.modelValue as string);
    }
  );

  const __date = computed(() => {
    return DateHelper(unref(_date));
  });

  const today = computed<boolean>(() => {
    const { year, month } = DateHelper(new Date());
    if (year === unref(__date).year && month === unref(__date).month) {
      return true;
    }
    return false;
  });

  const selectDay = computed<boolean>(() => {
    const { year, month } = DateHelper(_date.value);
    if (year === unref(__date).year && month === unref(__date).month) {
      return true;
    }
    return false;
  });

  const toggleMonth = (type: number) => {
    const temp = new Date(_date.value);
    temp.setMonth(temp.getMonth() + type);
    _date.value = temp;
  };

  const toggleYear = (type: number) => {
    const temp = new Date(_date.value);
    temp.setFullYear(temp.getFullYear() + type);
    _date.value = temp;
  };

  const calendarClick = (ev: MouseEvent, day: number) => {
    const { year, month } = unref(__date);
    toast({
      message: `${year}年${month + 1}年${day}日`,
    });
    emits('update:modelValue', `${year}-${month + 1}-${day}`);
  };
</script>

<template>
  <div class="calendar">
    <div class="gHui-calendar_month">
      <span @click="toggleYear(-1)">上一年</span>
      <span @click="toggleMonth(-1)">上一月</span>
      <div>{{ __date.year }}年{{ __date.month + 1 }}月</div>
      <span @click="toggleMonth(1)">下一月</span>
      <span @click="toggleYear(1)">下一年</span>
    </div>
    <div class="gHui-calendar_week">
      <div class="gHui-calendar_week-item" v-for="week in weeks" :key="week">
        {{ week }}
      </div>
    </div>
    <div class="gHui-calendar__date">
      <div
        class="gHui-calendar__date-item disable"
        v-for="i in __date.calendarPrevArr"
        :key="i"
      >
        {{ i }}
      </div>
      <div
        class="gHui-calendar__date-item"
        v-for="i in __date.days"
        :key="i"
        @click="calendarClick($event, i)"
        :class="[
          today && i === __date.date ? 'today' : '',
          selectDay && i === _date.getDate() ? 'selectDay' : '',
        ]"
      >
        {{ i }}
      </div>
      <div
        class="gHui-calendar__date-item disable"
        v-for="i in __date.calendarAfter"
        :key="i"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .calendar {
    background: white;
    margin-top: 10px;
    .gHui-calendar_month {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px 5px 15px;
      border-bottom: 1px solid #eee;
      span {
        font-size: 10px;
        color: #999;
      }
    }
    .gHui-calendar_week {
      display: flex;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
      .gHui-calendar_week-item {
        width: calc(100% / 7);
        text-align: center;
        line-height: 40px;
      }
    }
    .gHui-calendar__date {
      display: flex;
      flex-wrap: wrap;
      .gHui-calendar__date-item {
        user-select: none;
        width: calc(100% / 7);
        height: calc(100vw / 7);
        text-align: center;
        line-height: calc(100vw / 7);
        border-radius: 5px;
      }
      .gHui-calendar__date-item:active {
        background: #f2f2f2;
      }
      .disable {
        color: #ccc;
      }
      .today {
        color: white;
        font-size: 16px;
        font-weight: bold;
        background: pink;
      }
      .selectDay {
        color: white;
        font-size: 16px;
        font-weight: bold;
        background: #1989fa;
      }
    }
  }
</style>
