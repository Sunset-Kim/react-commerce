import { useQuery } from "@tanstack/react-query";
import { Firebase } from "../common";
import { productsCache } from "./products.query";
import { ProductQuery } from "./schema/products.query.schema";
import { ProdcutsClientService, ProductsModel } from "./service";

export const useProducts = (params: ProductQuery = {}) => {
  const { category, brand } = params;
  const firestore = Firebase.getInstance().FireStore;
  const productsService = new ProdcutsClientService(
    new ProductsModel(firestore)
  );

  const products = useQuery(
    productsCache.getProducts({ category, brand }),
    () => productsService.getProducts({ category, brand }),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return {
    products,
  };
};
