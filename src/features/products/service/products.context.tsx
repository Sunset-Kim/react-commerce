import { Firebase } from "@/features/common/firebase";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import { ProductMockModel } from "./__mock__/product.mock.model";
import ProductsModel from "./product.model";
import ProdcutsClientService from "./products.client.service";

interface IProdcutsContext {
  productService: ProdcutsClientService;
}

export const ProductsContext = createContext<IProdcutsContext | undefined>(
  undefined
);

export function ProductsProvider({ children }: PropsWithChildren) {
  // TODO: real service로 교체하기
  // const productService = new ProdcutsClientService(
  //   new ProductsModel(Firebase.getInstance().FireStore)
  // );

  // MOCK: 가짜 데이터
  const productService = new ProdcutsClientService(new ProductMockModel());

  return (
    <ProductsContext.Provider value={{ productService }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProduct = () => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error(
      "useProduct는 ProductsProvider 안에서만 사용할 수 있습니다"
    );
  }

  return {
    ...context,
  };
};
