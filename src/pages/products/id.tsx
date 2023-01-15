import { IProduct, useProduct } from "@/features/products";
import { getValidParam } from "@/utils/getVaildPram";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productService } = useProduct();

  const param = useParams();
  const [product, setProduct] = useState<IProduct>();
  const id = getValidParam({ param, field: "id" });

  useEffect(() => {
    if (id === undefined) return;

    productService
      .getProduct({ id })
      .then((res) => setProduct(res as IProduct));
  }, []);

  if (product === undefined) {
    return <div>하위</div>;
  }

  return (
    <div>
      <div>{product.brand}</div>
      <div>{product.name}</div>
      <div>{product.image}</div>
    </div>
  );
}
