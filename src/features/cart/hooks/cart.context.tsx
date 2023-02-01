import { PropsWithChildren } from "react";
import FireBaseAuthService from "../../auth/auth.client.service";
import { createContext } from "../../common";
import { MockCartClient } from "../service";
import CartClientService from "../service/cart.client.service";

export const [CartServiceProvider, useCartService] =
  createContext<CartClientService>({
    strict: true,
    name: "CartContext",
    errorMessage: "Error: CartContext",
  });

export function CartProvider({ children }: PropsWithChildren) {
  // const cartClient = new CartClient(Firebase.getInstance().FireStore);
  const auth = FireBaseAuthService.getInstance();
  const mockCartClient = new MockCartClient();
  const cartService = new CartClientService(mockCartClient, auth);

  return (
    <CartServiceProvider value={cartService}>{children}</CartServiceProvider>
  );
}
