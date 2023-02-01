/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import tw from "twin.macro";
import { UIProps } from "../types";

const commonStyle = tw`flex items-center gap-2 flex-[8] py-2 px-2`;

export function FilterDescription({
  children,
  sx,
  ...props
}: PropsWithChildren<UIProps>) {
  return (
    <dd
      {...props}
      css={[commonStyle, sx]}
    >
      {children}
    </dd>
  );
}
