import { PropsWithChildren } from "react";
import { createContext, Firebase } from "../common";
import { ProdcutsClientService, ProductMockModel } from "./service";

export const [ServiceProvider, useProductService] =
  createContext<ProdcutsClientService>({
    strict: true,
    name: "ProductContext",
    errorMessage: "Error: ProductContext",
  });

export function ProductsServiceProvider({ children }: PropsWithChildren) {
  const firestore = Firebase.getInstance().FireStore;
  const productsService = new ProdcutsClientService(
    // new ProductsModel(firestore)
    new ProductMockModel()
  );
  return <ServiceProvider value={productsService}>{children}</ServiceProvider>;
}
