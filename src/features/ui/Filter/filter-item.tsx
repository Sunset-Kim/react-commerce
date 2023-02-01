/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import tw from "twin.macro";
import { UIProps } from "../types";

const commonStyle = tw`
flex
`;

export function FilterItem({
  children,
  sx,
  ...props
}: PropsWithChildren<UIProps>) {
  return (
    <div
      {...props}
      css={[commonStyle, sx]}
    >
      <dt>{}</dt>
      {children}
    </div>
  );
}
