/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { UIProps } from "../ui.type";

export const StackItem = (props: UIProps<HTMLDivElement>) => (
  <div css={[tw`inline-block grow-0 basis-auto shrink-0 [min-width: 0]`]}>
    {props.children}
  </div>
);

export default StackItem;
