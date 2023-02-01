import { cartCached } from "./cart.query";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useCartService } from "./cart.context";
import { AuthError } from "@/features/common";

export const useCart = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cartService = useCartService();

  const onError = (err: unknown) => {
    if (err instanceof AuthError) {
      alert("로그인이 필요한 서비스입니다");
      navigate("/login", {
        state: {
          path: pathname,
        },
      });
    }
  };

  const getCart = useQuery(cartCached.getCartAll, () => cartService.getCart(), {
    staleTime: Infinity,
    cacheTime: Infinity,
    onError,
  });

  return getCart;
};
