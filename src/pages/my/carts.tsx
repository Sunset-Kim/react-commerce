import tw from "twin.macro";
import CartItem from "@/features/cart/cart-item";
import CartList from "@/features/cart/cart-list";

import Text from "@/features/ui/text";
import { useCart, useCartConrol } from "@/features/cart";
import Button from "@/features/ui/Button/button";
import Link from "@/features/ui/Link";

export default function Carts() {
  const { data: carts } = useCart();
  const { deleteCart } = useCartConrol();

  if (carts === undefined || carts.length === 0) {
    return (
      <div className="mb-8 flex flex-col items-center justify-center rounded bg-slate-50/75 py-8 shadow-sm">
        <Text size="sm">아직 상품이 없습니다</Text>

        <Link to="/">
          <Button
            variants="outlined"
            size="md"
            sx={tw`mt-4 rounded-xl border-gray-300 text-xs`}
          >
            쇼핑하러가기
          </Button>
        </Link>
      </div>
    );
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
            key={product.id}
            product={product}
            onDelete={() => {
              deleteCart(product.name);
            }}
          />
        ))}
      </CartList>
    </div>
  );
}
