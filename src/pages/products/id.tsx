/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

import { IProduct, useProduct } from "@/features/products";
import Button from "@/features/ui/Button/button";
import { Card } from "@/features/ui/Card";
import Group from "@/features/ui/Group/group";
import Stack from "@/features/ui/Stack/stack";
import Text from "@/features/ui/text";
import { getValidParam } from "@/utils/getVaildPram";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HStack from "@/features/ui/Stack/h-stack";
import SaleButton from "@/features/ui/Button/sale-button";

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
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="w-full bg-sky-50">
          <img
            referrerPolicy="no-referrer"
            className="aspect-square w-full object-cover object-center"
            src={product.image}
            alt=""
          />
        </div>
      </div>

      <div className="flex-1 border-l-2 pl-4">
        <Group>
          {product.brand}
          <div className="text-center">{product.name}</div>
        </Group>

        <div>사이즈</div>
        <div>최근거래가</div>
        <Stack sx={tw`gap-2 md:flex-row mb-4`}>
          <SaleButton
            role="buy"
            price={165_000}
          />
          <SaleButton
            role="sell"
            price={165_000}
          />
        </Stack>

        <Button
          variants="outlined"
          sx={tw`px-2 bg-white border-slate-200`}
        >
          <Text sx={tw`text-slate-800`}>관심상품 1,065</Text>
        </Button>
      </div>
    </div>
  );
}
