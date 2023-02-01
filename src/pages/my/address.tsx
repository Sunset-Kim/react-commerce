/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import Button from "@/features/ui/Button/button";
import Text from "@/features/ui/text";
import { AddressForm, AddressList, useAddress } from "@/features/address";
import { useToggle } from "@/features/common/hooks";
import { useAddressControl } from "@/features/address/hooks/use-address-control";
import { createPortal } from "react-dom";

export default function Adress() {
  const [isOpen, setToggle] = useToggle();
  const { data } = useAddress();
  const { addAddress } = useAddressControl();

  return (
    <>
      {data?.length === 0 && (
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
      )}

      {data && data.length > 0 && (
        <div>
          <div className="mb-8 flex flex-col items-center justify-center rounded bg-slate-50/75 py-8 shadow-sm">
            <Text
              size="sm"
              sx={tw`mb-2`}
            >
              새로운 배송지를 등록해보세요
            </Text>
            <Button
              variants="outlined"
              onClick={() => setToggle()}
              size="md"
              sx={tw`rounded-xl border-gray-300 text-xs`}
            >
              새 배송지 추가
            </Button>
          </div>

          <AddressList list={data} />
        </div>
      )}

      {createPortal(
        isOpen && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/25"
            onClick={(e) => {
              setToggle(false);
            }}
          >
            <div className="relative z-10 w-[360px] rounded-lg bg-white px-4 py-4">
              <AddressForm
                onSubmit={(address) => {
                  addAddress(address);
                  setToggle(false);
                }}
              />
            </div>
          </div>
        ),
        document.body
      )}
    </>
  );
}
