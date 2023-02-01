/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import tw from "twin.macro";
import Stack from "../Stack/stack";
import { UIProps } from "../types";

const commonStyle = tw`border`;

export function FilterList({
  sx,
  children,
  ...props
}: PropsWithChildren<UIProps>) {
  return (
    <dl
      {...props}
      css={[commonStyle, sx]}
    >
      {<Stack>{children}</Stack>}
    </dl>
  );
}
