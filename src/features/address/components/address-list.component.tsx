/** @jsxImportSource @emotion/react */
import Stack from "@/features/ui/Stack/stack";
import { PropsWithChildren } from "react";
import tw from "twin.macro";
import { Address, AddressResponse } from "../schema";
import { AddressItem } from "./address-item.component";

interface AddressListProps {
  list: AddressResponse[];
}

export function AddressList({ list }: PropsWithChildren<AddressListProps>) {
  return (
    <Stack sx={tw`border-b-2 border-black pb-4 gap-4`}>
      {list.map((item, i) => (
        <AddressItem
          key={item.id}
          address={item}
        />
      ))}
    </Stack>
  );
}
