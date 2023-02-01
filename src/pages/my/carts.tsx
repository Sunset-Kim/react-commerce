import tw from "twin.macro";
import CartItem from "@/features/cart/cart-item";
import CartList from "@/features/cart/cart-list";
import { useCart } from "@/features/cart/use-cart";
import Text from "@/features/ui/text";

export default function Carts() {
  const { data: carts, deleteCart } = useCart();

  if (carts === undefined || carts.length === 0) {
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
