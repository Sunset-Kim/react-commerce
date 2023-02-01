import { useQuery } from "@tanstack/react-query";
import { useProductService } from "./product.context";
import { productsCache } from "./products.query";

export const useProduct = (id: string) => {
  const service = useProductService();

  const getProduct = useQuery(
    productsCache.getProdcutWithId(id),
    () => service.getProduct({ id }),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: !!id,
    }
  );

  return getProduct;
};
