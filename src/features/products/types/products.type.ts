export enum Category {
  top = 1000,
  bottom,
  outer,
  shoes,
  bags,
}

export interface IProduct {
  name: string;
  image: string;
  brand: string;
  category: Category;
}
