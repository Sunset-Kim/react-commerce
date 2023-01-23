/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { PropsWithChildren } from "react";
import { UIProps } from "../types/common.type";

export const Card = ({ sx, children }: PropsWithChildren<UIProps>) => {
  return (
    <div css={[tw`rounded-md bg-slate-50 py-2 px-4 shadow-md`, sx]}>
      {children}
    </div>
  );
};
