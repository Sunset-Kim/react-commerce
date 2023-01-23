/** @jsxImportSource @emotion/react */
import { DetailedHTMLProps, HTMLAttributes } from "react";
import tw from "twin.macro";
import { UIProps } from "../types/common.type";

interface StackDividerProps
  extends UIProps<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {}

export const StackDivider = (props: StackDividerProps) => (
  <div
    css={[
      tw`[border-width: 0] self-stretch border-inherit [width: auto] [height: auto]`,
      tw`bg-slate-100`,
      props.sx,
    ]}
  />
);
