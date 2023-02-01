/** @jsxImportSource @emotion/react */
import { formatPrivateValue } from "@/features/fomatter/format-private-value";
import Button from "@/features/ui/Button/button";
import Stack from "@/features/ui/Stack/stack";
import tw from "twin.macro";
import { AddressResponse } from "../schema";
import { useAddress } from "../hooks/use-address";
import { useAddressControl } from "../hooks/use-address-control";
import { UIProps } from "@/features/ui";
import Text from "@/features/ui/text";

interface AddressItemProps extends UIProps {
  address: AddressResponse;
}

export function AddressItem(props: AddressItemProps) {
  const { id, name, phone, roadAddress, roadNamecode } = props.address;
  const { deleteAddress } = useAddressControl();

  const displayName = formatPrivateValue("name", name);
  const displayPhone = formatPrivateValue("phone", phone);

  return (
    <Stack {...props}>
      <div className="flex items-center">
        <Text weight="700">{displayName}</Text>
      </div>
      <Text size="sm">{displayPhone}</Text>
      <Text size="sm">
        ({roadNamecode}){roadAddress}
      </Text>
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
