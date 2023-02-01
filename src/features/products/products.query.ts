import { ProductsQuery } from "./schema/products.query.schema";

const CATEGORIES_KEY = "categoires";
const PRODUCTS_KEY = "products";
const PRODUCT_KEY = "product";

export const productsCache = {
  getCategories: [CATEGORIES_KEY],
  getProducts: (options: ProductsQuery = {}) => {
    const { category, brand } = options;
    return [PRODUCTS_KEY, { ...category } ?? "all", { ...brand } ?? "all"];
  },

  getProdcutWithId: (id: string) => [PRODUCT_KEY, id],
};
