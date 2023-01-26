/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import Button from "@/features/ui/Button/button";
import Text from "@/features/ui/text";
import { AddressForm, AddressList, useAddress } from "@/features/address";
import { useToggle } from "@/features/common/hooks";

export default function Adress() {
  const [isOpen, setToggle] = useToggle();
  const { data, isLoading, addAddress } = useAddress();

  if (isLoading) {
    return <>로딩중</>;
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center">
        <Text size="sm">배송지 정보가 없습니다.</Text>
        <Text size="sm">새 배송지를 등록해주세요</Text>
        <Button
          variants="outlined"
          onClick={() => setToggle()}
          size="md"
          sx={tw`mt-4 rounded-xl border-gray-300 text-xs`}
        >
          새 배송지 추가
        </Button>
      </div>
    );
  }

  return (
    <>
      <div>{data && <AddressList list={data} />}</div>

      {isOpen && <AddressForm onSubmit={(address) => addAddress(address)} />}
    </>
  );
}
