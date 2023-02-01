/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import tw from "twin.macro";
import { UIProps } from "../types";

const commonStyle = tw`
flex items-center
bg-slate-600 text-white px-2 py-2 flex-[2] font-bold text-sm`;

export function FilterTerm({
  sx,
  children,
  ...props
}: PropsWithChildren<UIProps>) {
  return <dt css={[commonStyle, sx]}>{children}</dt>;
}
