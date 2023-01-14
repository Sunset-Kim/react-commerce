import { IProduct } from "@/types/products.type";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log(e));
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
