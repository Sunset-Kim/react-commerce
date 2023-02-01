/** @jsxImportSource @emotion/react */
import { useAddress } from "@/features/address";
import { useAuth } from "@/features/auth";
import { useCart } from "@/features/cart";
import CartItem from "@/features/cart/cart-item";
import CartList from "@/features/cart/cart-list";
import { formatPrivateValue } from "@/features/fomatter/format-private-value";
import Button from "@/features/ui/Button/button";
import Link from "@/features/ui/Link";
import Text from "@/features/ui/text";

import tw from "twin.macro";

export default function MyHome() {
  const { user } = useAuth();
  const { data: cartItems } = useCart();

  return (
    <div>
      <div className="mb-8 rounded-md border py-4">
        <div className="mb-4 flex items-center border-b px-4 pb-4">
          <div className="mr-4 h-80pxr w-80pxr overflow-hidden rounded-full">
            <img
              className="object-cover object-center"
              src={user?.photoUrl}
              alt={user?.name}
            />
          </div>
          <div>
            <Text
              size="lg"
              weight="700"
              sx={tw`mb-2`}
            >
              {user?.name && formatPrivateValue("name", user.name)}
            </Text>
            <Button
              variants="outlined"
              sx={tw`text-xs`}
            >
              프로필 수정
            </Button>
          </div>
        </div>

        <div className="flex justify-between px-4">
          <div className="flex-1 text-center">
            <Text weight="700">일반 회원</Text>
            <Text size="sm">회원 등급</Text>
          </div>
          <div className="flex-1 text-center">
            <Text weight="700">0P</Text>
            <Text size="sm">포인트</Text>
          </div>
        </div>
      </div>

      <section>
        <h3 className="mb-8 text-lg font-semibold">최근 추가한품목</h3>

        {!cartItems || cartItems.length === 0 ? (
          <div className="rounded-xl bg-slate-50 py-8 text-center shadow">
            아직 추가한 품목이 없습니다
          </div>
        ) : (
          <CartList>
            {cartItems?.splice(0, 3)?.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                readonly={true}
              />
            ))}
          </CartList>
        )}

        <div className="mt-2 text-right">
          {cartItems && (
            <Link
              to="cart"
              sx={tw`hover:bg-sky-100 px-2 py-1 rounded hover:[text-decoration: none]`}
            >
              <span className="text-sm">카트 바로가기</span>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
