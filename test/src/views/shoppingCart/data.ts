import { mock, Random } from 'mockjs';
import type { ShopItem, GoodsItem } from './type';

export const cartList = (): ShopItem[] => {
  const list: ShopItem[] = [];
  for (let i = 0; i < Random.integer(3, 5); i++) {
    list.push({
      isCheck: false,
      shopName: `${mock('@ctitle')}自营店`,
      goodsList: (() => {
        const itemList: GoodsItem[] = [];
        for (let j = 0; j < Random.integer(2, 5); j++) {
          itemList.push({
            isCheck: false,
            goodsImg: Random.image(
              '100x100',
              mock('@color'),
              mock('color'),
              `商品${i}${j}`
            ),
            goodsName: mock('@ctitle'),
            goodsSpec: ['包邮', '麻辣'],
            price: Random.float(50, 100, 2, 2),
            maxNum: Random.integer(20, 50),
            num: Random.integer(1, 10),
          });
        }
        return itemList;
      })(),
    });
  }
  return list;
};
