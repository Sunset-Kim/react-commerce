import ProductList from "@/features/products/product-list/prodcut-list.component";
import { useProduct } from "@/features/products/service/products.context";
import { IProduct } from "@/features/products/types/products.type";
import debug from "@/utils/debug";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const log = debug("Page | products :");

export default function Products() {
  const { productService } = useProduct();

  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    productService
      .getProducts()
      .then((data) => setProducts(data as IProduct[]))
      .catch((err) => log(err));
  }, []);

  if (products === undefined) {
    return <div>아이템이 없습니다</div>;
  }

  return (
    <div className="container mx-auto">
      <ProductList list={products} />
    </div>
  );
}
