/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import tw from "twin.macro";
import { UIProps } from "../types/common.type";

export const StackItem = (props: UIProps<HTMLDivElement>) => (
  <div css={[tw`inline-block grow-0 basis-auto shrink-0 [min-width: 0]`]}>
    {props.children as ReactNode}
  </div>
);

export default StackItem;
