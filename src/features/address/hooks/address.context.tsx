import FireBaseAuthService from "@/features/auth/auth.client.service";
import { createContext, Firebase } from "@/features/common";
import { PropsWithChildren } from "react";
import { AddressClient, AddressClientService } from "../service";

export const [AddressServiceProvider, useAddressService] =
  createContext<AddressClientService>({
    strict: true,
    name: "AddressContext",
    errorMessage: "Error: AddressContext",
  });

export function AddressProvider({ children }: PropsWithChildren) {
  const addressClient = new AddressClient(Firebase.getInstance().FireStore);
  const auth = FireBaseAuthService.getInstance();
  const addressService = new AddressClientService(addressClient, auth);

  return (
    <AddressServiceProvider value={addressService}>
      {children}
    </AddressServiceProvider>
  );
}
