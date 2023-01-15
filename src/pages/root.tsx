import HeaderLayout from "@/features/ui/layouts/HeaderLayout";
import Header from "@/features/ui/Header";
import { Outlet } from "react-router-dom";
import { ProductsProvider } from "@/features/products";

export default function Root() {
  return (
    <HeaderLayout header={<Header />}>
      <ProductsProvider>
        <Outlet />
      </ProductsProvider>
    </HeaderLayout>
  );
}
