import { useQuery } from "@tanstack/react-query";
import { Firebase } from "../common";
import { productsCache } from "./products.query";
import { ProductsQuery } from "./schema/products.query.schema";
import {
  ProdcutsClientService,
  ProductMockModel,
  ProductsModel,
} from "./service";

export const useProducts = (params: ProductsQuery = {}) => {
  const { category, brand } = params;
  const firestore = Firebase.getInstance().FireStore;
  const productsService = new ProdcutsClientService(
    // new ProductsModel(firestore)
    new ProductMockModel()
  );

  const products = useQuery(
    productsCache.getProducts({ category, brand }),
    () => productsService.getProducts({ category, brand }),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  const categories = useQuery(
    productsCache.getCategories,
    () => productsService.getCategories(),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return {
    products,
    categories,
  };
};
