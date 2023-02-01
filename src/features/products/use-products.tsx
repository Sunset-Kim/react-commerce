import { useQuery } from "@tanstack/react-query";

import { useProductService } from "./product.context";
import { productsCache } from "./products.query";
import { ProductsQuery } from "./schema/products.query.schema";
import { ProdcutsClientService, ProductMockModel } from "./service";

export const useProducts = (params: ProductsQuery = {}) => {
  const service = useProductService();
  const { category, brand } = params;

  const products = useQuery(
    productsCache.getProducts({ category, brand }),
    () => service.getProducts({ category, brand }),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  const categories = useQuery(
    productsCache.getCategories,
    () => service.getCategories(),
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
