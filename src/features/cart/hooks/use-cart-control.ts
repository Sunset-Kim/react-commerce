import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthError } from "../../common";
import { Product } from "../../products/schema/product.schema";
import { useCartService } from "./cart.context";
import { cartCached } from "./cart.query";

export const useCartConrol = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cartService = useCartService();
  const queryClient = useQueryClient();

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
  const { mutate: addCart } = useMutation(
    (product: Product) => cartService.addCart(product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(cartCached.getCartAll);
      },
      onError,
    }
  );

  const { mutate: deleteCart } = useMutation(
    (id: string) => cartService.deleteCart(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(cartCached.getCartAll);
      },
      onError,
    }
  );

  return {
    addCart,
    deleteCart,
  };
};
