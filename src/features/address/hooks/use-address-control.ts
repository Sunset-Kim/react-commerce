import { AuthError } from "@/features/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { Address } from "../schema";
import { useAddressService } from "./address.context";
import { addressCached } from "./address.query";

export const useAddressControl = () => {
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
    addAddress,
    deleteAddress,
  };
};
