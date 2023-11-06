export type DiscountProps = {
  percent: number;
  time: string;
};

enum SIZE {
  "3XL" = "3XL",
  "2XL" = "2XL",
  "XL" = "XL",
  "Medium" = "Medium",
  "Small" = "Small",
}

export type ProductProps = {
  id: number;
  price: number;
  discount: DiscountProps;
  title: string;
  size: SIZE[];
  count: number;
  remaining_count: number;
  images: string[];
  colors: string[];
};
