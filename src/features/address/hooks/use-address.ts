import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import FireBaseAuthService from "../../auth/auth.client.service";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthError } from "../../common";
import { addressCached } from "./address.query";
import { Address } from "../schema";
import { useAddressService } from "./address.context";

export const useAddress = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const addressService = useAddressService();

  const onError = (err: unknown) => {
    if (err instanceof AuthError) {
      navigate("/login", {
        state: {
          path: pathname,
        },
      });
    }
  };

  const result = useQuery(
    addressCached.getAllAddress,
    () => addressService.getAddresses(),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      onError,
    }
  );

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
