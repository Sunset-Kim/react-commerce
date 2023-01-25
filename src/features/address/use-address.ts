import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import FireBaseAuthService from "../auth/auth.client.service";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthError, Firebase } from "../common";
import { AddressClient } from "./address.model";
import { AddressClientService } from "./address.client.service";
import { addressCached } from "./address.query";
import { Address } from "./schema";

export const useAddress = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const auth = FireBaseAuthService.getInstance();

  const addressModel = new AddressClient(Firebase.getInstance().FireStore);
  const addressService = new AddressClientService(addressModel, auth);

  const result = useQuery(addressCached.getAllAddress, () =>
    addressService.getAddresses()
  );

  const onError = (err: unknown) => {
    if (err instanceof AuthError) {
      navigate("/login", {
        state: {
          path: pathname,
        },
      });
    }
  };

  const { mutate: addAddress } = useMutation(
    (address: Address) => addressService.addAddress(address),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(addressCached.getAllAddress);
      },
      onError,
    }
  );

  const { mutate: deleteAddress } = useMutation(
    (id: string) => addressService.deleteAddress(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(addressCached.getAllAddress);
      },
      onError,
    }
  );

  return {
    ...result,
    addAddress,
    deleteAddress,
  };
};
