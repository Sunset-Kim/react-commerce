/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import Stack from "@/features/ui/Stack/stack";
import Text from "@/features/ui/text";
import { getValidParam } from "@/utils/getVaildPram";

import { createSearchParams, useParams } from "react-router-dom";

import SaleButton from "@/features/ui/Button/sale-button";

import { useProduct } from "@/features/products";
import Error500 from "@/features/ui/Errors/error-500";
import { categoryMapper } from "@/constants/map/category_map";
import { formatCurrency } from "@/features/fomatter";
import { IconShoppingCart } from "@tabler/icons-react";

import Button from "@/features/ui/Button/button";
import Link from "@/features/ui/Link";
import { useCartConrol } from "@/features/cart";

export default function ProductDetail() {
  const param = useParams();
  const { addCart } = useCartConrol();
  const id = getValidParam({ param, field: "id" });

  if (id === undefined) {
    return <Error500 />;
  }

  const { data: product, isError } = useProduct(id);

  if (isError || !product) {
    return <Error500 />;
  }

  const { brand, category, createdAt, id: productId, name, price } = product;

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="w-full bg-sky-50">
          <img
            referrerPolicy="no-referrer"
            className="aspect-square w-full object-cover object-center"
            src={productId}
            alt={name}
          />
        </div>
      </div>

      <div className="flex-1 border-l pl-4">
        <div className="mb-4">
          <div className="mb-4">
            <Link
              to={{
                pathname: "/",
                search: createSearchParams({ category }).toString(),
              }}
              sx={tw`text-sm mb-1`}
            >
              {categoryMapper(category)}
            </Link>
            <Text weight="600">{brand}</Text>
            <Text
              size="sm"
              sx={tw`text-stone-500`}
            >
              {name}
            </Text>
          </div>

          <dl>
            <div className="mb-2 flex items-center justify-between border-b pb-2">
              <dt className="text-xs">사이즈</dt>
              <dd className="font-semibold">모든사이즈</dd>
            </div>

            <div className="mb-2 flex items-center justify-between pb-2">
              <dt className="text-xs">최근거래가</dt>
              <dd className="font-bold">{formatCurrency(price)}</dd>
            </div>
          </dl>
        </div>

        <Stack sx={tw`gap-2 md:flex-row mb-4`}>
          <SaleButton
            role="buy"
            price={price}
          />
          <SaleButton
            role="sell"
            price={price * 0.8}
          />
        </Stack>
        <div>
          <Button
            variants="outlined"
            sx={tw`text-sm`}
            onClick={() => addCart(product)}
          >
            <IconShoppingCart
              className="mr-1"
              size={18}
              stroke={1}
            />
            <Text>장바구니에 담기</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
