/** @jsxImportSource @emotion/react */
import { getCloudImg } from "@/utils/get-cloud-img";
import tw from "twin.macro";
import { Product } from "../products/schema/product.schema";

import Button from "../ui/Button/button";
import SaleButton from "../ui/Button/sale-button";
import Link from "../ui/Link";
import HStack from "../ui/Stack/h-stack";
import Stack from "../ui/Stack/stack";
import Text from "../ui/text";
interface CartItem {
  product: Product;
  onDelete?: () => void;
  readonly?: boolean;
}

export default function CartItem(props: CartItem) {
  const { product, onDelete, readonly = false } = props;
  const { id, name, brand, price } = product;
  return (
    <HStack sx={tw`w-full items-center`}>
      <Link
        sx={tw`flex-1`}
        to={`/product/${id}`}
      >
        <div className="mr-20pxr flex grow basis-[300px]">
          <div className="mr-16pxr w-100pxr rounded-lg bg-gray-50 ">
            <img
              className="aspect-square w-full object-cover object-center"
              src={getCloudImg(id)}
              alt={name}
            />
          </div>

          <div>
            <Text sx={tw`underline font-bold`}>{brand}</Text>
            <Text size="sm">{name}</Text>
          </div>
        </div>
      </Link>

      {!readonly && (
        <Stack sx={tw`items-end grow-0 shrink-0 w-185pxr`}>
          <SaleButton
            role="buy"
            sx={tw`mb-2`}
            price={price}
          />
          {onDelete && (
            <button
              className="w-fit text-right underline"
              onClick={onDelete}
            >
              <Text size="sm">삭제</Text>
            </button>
          )}
        </Stack>
      )}
    </HStack>
  );
}
