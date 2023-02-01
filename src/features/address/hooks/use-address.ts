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

  return {
    ...result,
  };
};
