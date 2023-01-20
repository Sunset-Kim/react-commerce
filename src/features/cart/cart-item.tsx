/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { formatCurrency } from "../fomatter";
import { IProduct } from "../products";
import Button from "../ui/Button/button";
import SaleButton from "../ui/Button/sale-button";
import HStack from "../ui/Stack/h-stack";
import Stack from "../ui/Stack/stack";
import Text from "../ui/text";
interface CartItem {
  product: IProduct;
  onDelete: () => void;
}

export default function CartItem(props: CartItem) {
  const { product, onDelete } = props;
  const { name, image, brand, price } = product;
  return (
    <HStack sx={tw`items-center`}>
      <div className="mr-20pxr flex grow basis-[300px]">
        <div className="mr-16pxr w-100pxr rounded-lg bg-gray-50 ">
          <img
            className="aspect-square w-full object-cover object-center"
            src={image}
            alt={name}
          />
        </div>

        <div>
          <Text sx={tw`underline font-bold`}>{brand}</Text>
          <Text>{name}</Text>
        </div>
      </div>

      <Stack sx={tw`items-end grow-0 shrink-0 w-185pxr`}>
        <SaleButton
          role="buy"
          sx={tw`mb-2`}
          price={price}
        />
        <button
          className="w-fit text-right underline"
          onClick={onDelete}
        >
          <Text size="sm">삭제</Text>
        </button>
      </Stack>
    </HStack>
  );
}
