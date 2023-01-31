import { Category } from "./schema/category.schema";

const PRODUCTS_KEY = "products";
const PRODUCT_KEY = "product";

export const productsCache = {
  getAllProducts: [PRODUCTS_KEY],
  getProducts: ({
    category,
    brand,
  }: {
    category?: Category;
    brand?: string;
  }) => [PRODUCTS_KEY, category ?? "all", brand ?? "all"],

  getProdcutWithId: (id: string) => [PRODUCT_KEY, id],
};
