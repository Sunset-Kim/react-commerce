/** @jsxImportSource @emotion/react */
import { FormEvent, useRef } from "react";
import tw from "twin.macro";
import Button from "../ui/Button/button";
import { FormControl, FormLabel } from "../ui/Form";
import Input from "../ui/Input/input";
import { useAddress } from "./use-address";

type AddressPropsKey = "roadNamecode" | "roadAddress" | "detailAddress";
type FormResult = { [key in AddressPropsKey]: string };

interface AddressForm {
  onSubmit: (result: FormResult) => void;
}

export default function AddressForm({ onSubmit }: AddressForm) {
  const detailInput = useRef<HTMLInputElement>(null);
  const { onSearch, roadAddress, roadnameCode } = useAddress();

  const handleSumit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const result: FormResult = [...formData.entries()].reduce((obj, [k, v]) => {
      obj[k as AddressPropsKey] = v as string;
      return obj;
    }, {} as FormResult);

    onSubmit(result);
  };

  return (
    <form onSubmit={handleSumit}>
      <FormControl>
        <FormLabel>도로번호</FormLabel>
        <Input
          type="text"
          name="roadNamecode"
          readOnly
          value={roadnameCode ?? ""}
        />
      </FormControl>

      <FormControl>
        <FormLabel>주소</FormLabel>
        <div className="flex">
          <Input
            type="text"
            name="roadAddress"
            readOnly
            value={roadAddress ?? ""}
          />
          <Button
            sx={tw`grow-0 basis-80pxr`}
            onClick={onSearch}
          >
            검색
          </Button>
        </div>
      </FormControl>
      <FormControl>
        <FormLabel>상세주소</FormLabel>
        <Input
          name="detailAddress"
          ref={detailInput}
          type="text"
        />
      </FormControl>

      <Button>제출</Button>
    </form>
  );
}
