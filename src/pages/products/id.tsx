import { IProductDetail } from "@/types/products.type";
import { getValidParam } from "@/utils/getVaildPram";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const param = useParams();
  const [product, setProduct] = useState<IProductDetail>();
  const id = getValidParam({ param, field: "id" });

  useEffect(() => {
    if (id) {
      fetch("/data/product_1.json")
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch(console.log);
    }
  }, []);

  if (product === undefined) {
    return <div>하위</div>;
  }

  return (
    <div>
      <div>{product.brand}</div>
      <div>{product.name}</div>
      <div>{product.image}</div>
      <div>{product.price}</div>
    </div>
  );
}
