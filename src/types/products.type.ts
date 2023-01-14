export interface IProduct {
  name: string;
  image: string;
  brand: string;
}

export interface IProductDetail extends IProduct {
  category: string;
  price: number;
}
