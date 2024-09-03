export type Specific = {
  name: string;
  items: { name: string; isToggle: boolean | undefined; image?: string }[];
};

export type goodsItem = {
  stock: number;
  price: number;
  difference: string;
  legend: string;
};
