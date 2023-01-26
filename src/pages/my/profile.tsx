/** @jsxImportSource @emotion/react */
import { AddressForm } from "@/features/address";
import Text from "@/features/ui/text";
import { useState } from "react";
import tw from "twin.macro";

export default function Profile() {
  return (
    <div>
      우편번호검색기
      <AddressForm onSubmit={() => {}} />
    </div>
  );
}
