import CartClientService, { AuthError } from "./cart.client.service";
import { cartCached } from "./query";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import FireBaseAuthService from "../auth/auth.client.service";
import { Firebase } from "../common/firebase";
import { CartClient, MockCartClient } from "./cart.model";
import { IProduct } from "../products";
import { useLocation, useNavigate } from "react-router-dom";

export const useCart = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const auth = FireBaseAuthService.getInstance();
  // FIXME: MOCK CART
  const cartClient = new CartClient(Firebase.getInstance().FireStore);

  // const mockCartClient = new MockCartClient();
  const cartService = new CartClientService(cartClient, auth);

  const result = useQuery(cartCached.getCartAll, () => cartService.getCart());
  const onError = (err: unknown) => {
    if (err instanceof AuthError) {
      navigate("/login", {
        state: {
          path: pathname,
        },
      });
    }
  };

  const { mutate: addCart } = useMutation(
    (product: IProduct) => cartService.addCart(product),
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
    ...result,
    addCart,
    deleteCart,
  };
};
