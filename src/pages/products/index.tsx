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

  return (
    <div className="container mx-auto">
      <ul className="grid grid-cols-3 gap-2">
        {products?.map((item) => (
          <Link
            key={item.image}
            to={"/products/1"}
          >
            <div className="rounded-md bg-slate-200 py-28 px-20"></div>
            <p>{item.name}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
