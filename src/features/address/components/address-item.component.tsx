/** @jsxImportSource @emotion/react */
import { formatPrivateValue } from "@/features/fomatter/format-private-value";
import Button from "@/features/ui/Button/button";
import Stack from "@/features/ui/Stack/stack";
import tw from "twin.macro";
import { AddressResponse } from "../schema";
import { useAddress } from "../use-address";

interface AddressItemProps {
  address: AddressResponse;
}

export function AddressItem(props: AddressItemProps) {
  const { id, name, phone, roadAddress, roadNamecode } = props.address;
  const { deleteAddress } = useAddress();

  const displayName = formatPrivateValue("name", name);
  const displayPhone = formatPrivateValue("phone", phone);

  return (
    <Stack>
      <div className="flex">
        {displayName} <div>기본 배송지</div>
      </div>
      <div>{displayPhone}</div>
      <div>
        ({roadNamecode}){roadAddress}
      </div>
      <div className="mt-2 flex gap-2">
        <Button
          size="sm"
          variants="outlined"
          sx={tw`text-sm`}
        >
          수정
        </Button>

        <Button
          size="sm"
          variants="outlined"
          sx={tw`text-sm`}
          onClick={() => deleteAddress(id)}
        >
          삭제
        </Button>
      </div>
    </Stack>
  );
}
