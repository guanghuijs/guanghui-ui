export type ShopItem = {
  isCheck: boolean;
  shopName: string;
  goodsList: GoodsItem[];
};

export type GoodsItem = {
  isCheck: boolean;
  goodsImg: string;
  goodsName: string;
  goodsSpec: string[];
  price: number;
  maxNum: number;
  num: number;
};
