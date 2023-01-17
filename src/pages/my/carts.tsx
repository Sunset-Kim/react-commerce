import CartItem from "@/features/cart/cart-item";
import CartList from "@/features/cart/cart-list";
import { IProduct, useProduct } from "@/features/products";
import Text from "@/features/ui/text";
import { useEffect, useState } from "react";
import tw from "twin.macro";

export default function Carts() {
  const { productService } = useProduct();
  const [carts, setCarts] = useState<IProduct[]>();

  useEffect(() => {
    productService
      .getProducts()
      .then((data) => setCarts(data as IProduct[]))
      .catch();
  }, []);

  if (carts === undefined) {
    return <>상품이 없습니다</>;
  }

  return (
    <div>
      <Text
        sx={tw`text-2xl border-b-3 border-stone-900 pb-10pxr mb-20pxr`}
        weight="600"
        as={"h2"}
      >
        관심상품
      </Text>

      <CartList>
        {carts?.map((product) => (
          <CartItem
            key={product.image}
            product={product}
            onDelete={() => {}}
          />
        ))}
      </CartList>
    </div>
  );
}
