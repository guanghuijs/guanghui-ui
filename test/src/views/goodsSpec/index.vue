<script setup lang="ts">
  import { computed, ref, unref } from 'vue';
  import { goods } from './data';
  const specific = ref(goods().specific);
  const goodsSpec = goods().goodsSpec;

  const selectArr = ref<string[]>([]);
  const subIndex = ref<number[]>([]);

  /**
   * @param {String} specName 当前点击规格按钮的值(黑色，35)
   * @param {Number} specIndex 选择的规格下标(例子中颜色是0，尺码是1)
   * @param {Number} specItemIndex 选择规格值下标(例子中35下标是0)
   * @param isToggle
   */
  const specificationBtn = (
    specName: string,
    specIndex: number,
    specItemIndex: number,
    isToggle: boolean | undefined
  ): void => {
    if (!isToggle) return;
    if (unref(selectArr)[specIndex] != specName) {
      selectArr.value[specIndex] = specName;
      subIndex.value[specIndex] = specItemIndex;
    } else {
      selectArr.value[specIndex] = '';
      subIndex.value[specIndex] = -1;
    }
    clickPitch();
  };

  /**
   * 按钮控权
   */
  const clickPitch = () => {
    const temp: string[] = [];
    for (const i in unref(specific)) {
      temp[i] = unref(selectArr)[i] ? unref(selectArr)[i] : '';
    }

    for (const i in unref(specific)) {
      const last = temp[i];
      for (const k in unref(specific)[i].items) {
        temp[i] = unref(specific)[i].items[k].name;
        specific.value[i].items[k].isToggle = isMay(temp);
      }
      temp[i] = last;
    }
  };

  const isMay = (result: string[]): boolean | undefined => {
    for (const i in result) {
      if (result[i] === '') {
        return true;
      }
    }
    for (const i in goodsSpec) {
      if (goodsSpec[i].difference === result.join(';')) {
        return true;
      }
    }
  };

  const calcSpecific = computed(() => {
    const specString = unref(selectArr)
      .filter((i) => i)
      .join(';');
    let stock: number = 0;
    let price: number = 0;
    try {
      goodsSpec.forEach((item) => {
        if (item.difference === specString) {
          stock = item.stock;
          price = item.price;
          throw new Error();
        } else {
          stock = 0;
          price = 0;
        }
      });
    } catch (e) {
      console.log(e);
    }

    return {
      specString,
      result: {
        stock,
        price,
      },
    };
  });
</script>

<template>
  <div class="container">
    <div class="spec-top flex-between">
      <div class="spec-top-left">
        <img />
        <div class="goods-base-info">
          <div>￥{{ calcSpecific.result.price }}</div>
          <p>库存:{{ calcSpecific.result.stock }}</p>
          <span>{{ calcSpecific.specString }}</span>
        </div>
      </div>
    </div>
    <div class="specific">
      <div
        class="spec-item"
        v-for="({ name, items }, specIndex) in specific"
        :key="specIndex"
      >
        <p>{{ name }}</p>
        <div class="spec-item-tag">
          <span
            v-for="({ name, isToggle }, specItemIndex) in items"
            :key="name"
            :class="[
              isToggle ? '' : 'noProduct',
              subIndex[specIndex] === specItemIndex ? 'active' : '',
            ]"
            @click="specificationBtn(name, specIndex, specItemIndex, isToggle)"
            >{{ name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    background: white;
    .spec-top {
      padding: 15px;
      border-bottom: 1px solid #eee;
      .spec-top-left {
        display: flex;
        align-items: center;
        img {
          width: 80px;
          height: 80px;
          background: red;
          margin-right: 10px;
        }
        .goods-base-info {
          div {
            font-weight: bold;
            font-size: 18px;
            color: pink;
          }
          p {
            margin: 4px 0;
          }
        }
      }
    }
    .specific {
      padding: 0 0.3rem 0.3rem 0.3rem;
      .spec-item {
        border-bottom: 1px solid #eee;
        padding-bottom: 0.2rem;
        p {
          font-weight: bold;
          font-size: 0.3rem;
          margin: 0.3rem 0;
        }
        .spec-item-tag {
          span {
            display: inline-block;
            padding: 0.1rem 0.2rem;
            background: #f2f2f2;
            margin-right: 0.1rem;
            border-radius: 3px;
            font-size: 0.24rem;
          }
          span.active {
            color: white;
            background: pink;
          }
          span.noProduct {
            opacity: 0.3;
          }
        }
      }
    }
  }
</style>
