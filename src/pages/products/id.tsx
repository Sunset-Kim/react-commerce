/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

import { IProduct, useProduct } from "@/features/products";
import Button from "@/features/ui/button";
import { Card } from "@/features/ui/Card";
import Group from "@/features/ui/Group/group";
import Stack from "@/features/ui/Stack/stack";
import Text from "@/features/ui/text";
import { getValidParam } from "@/utils/getVaildPram";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HStack from "@/features/ui/Stack/h-stack";

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
          <Button
            sx={tw`justify-start rounded-2xl p-0`}
            variants="primary"
            color="green"
          >
            <HStack isDivder>
              <div className="flex h-full w-full items-center justify-center px-2">
                <Text
                  weight="700"
                  size="xl"
                >
                  구매
                </Text>
              </div>

              <div className="px-2 py-2 text-left">
                <p>165,000원</p>
                <Text size="xs">즉시구매가</Text>{" "}
              </div>
            </HStack>
          </Button>

          <Button
            sx={tw`justify-start rounded-2xl p-0`}
            variants="primary"
            color="red"
          >
            <HStack isDivder>
              <div className="flex h-full w-full items-center justify-center px-2">
                <Text
                  weight="700"
                  size="xl"
                >
                  판매
                </Text>
              </div>

              <div className="px-2 py-2 text-left">
                <p>165,000원</p>
                <Text size="xs">즉시구매가</Text>
              </div>
            </HStack>
          </Button>
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
