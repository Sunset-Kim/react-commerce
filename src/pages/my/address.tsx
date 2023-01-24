/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import AddressForm from "@/features/address/address-form";
import Button from "@/features/ui/Button/button";
import Text from "@/features/ui/text";

export default function Adress() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Text size="sm">배송지 정보가 없습니다.</Text>
        <Text size="sm">새 배송지를 등록해주세요</Text>
        <Button
          variants="outlined"
          sx={tw`mt-4 w-auto rounded-xl border-gray-300 text-xs text-gray-700 hover:bg-gray-800`}
        >
          새 배송지 추가
        </Button>
      </div>
      <AddressForm onSubmit={(address) => console.log(address)} />
    </>
  );
}
