/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { UIProps } from "../ui.type";

export const StackDivider = (props: UIProps<HTMLDivElement>) => (
  <div
    css={[
      tw`[border-width: 0] self-stretch border-inherit [width: auto] [height: auto]`,
      tw`bg-slate-100`,
      props.sx,
    ]}
  />
);
