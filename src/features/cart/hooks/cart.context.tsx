import { PropsWithChildren } from "react";
import FireBaseAuthService from "../../auth/auth.client.service";
import { createContext, Firebase } from "../../common";
import { CartClient, MockCartClient } from "../service";
import CartClientService from "../service/cart.client.service";

export const [CartServiceProvider, useCartService] =
  createContext<CartClientService>({
    strict: true,
    name: "CartContext",
    errorMessage: "Error: CartContext",
  });

export function CartProvider({ children }: PropsWithChildren) {
  const cartClient = new CartClient(Firebase.getInstance().FireStore);
  const auth = FireBaseAuthService.getInstance();
  
  const cartService = new CartClientService(cartClient, auth);

  return (
    <CartServiceProvider value={cartService}>{children}</CartServiceProvider>
  );
}
