/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

import {
  Fragment,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
  DetailedHTMLProps,
} from "react";
import { UIProps } from "../types/common.type";
import getValidChildren from "@/utils/get-valid-child";
import StackItem from "./stack-item";
import { StackDivider } from "./stack-divider";

export interface StackProps
  extends UIProps<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {
  direction?: "row" | "column";
  isDivder?: boolean;
}

export default function Stack({
  children,
  isDivder = false,
  direction = "column",
  sx,
}: PropsWithChildren<StackProps>) {
  const dividerStyle = useMemo(() => {
    return direction === "row" ? tw`w-px` : tw`h-px`;
  }, [direction]);

  const clones = useMemo(() => {
    const validChildren = getValidChildren(children);
    return !isDivder
      ? validChildren
      : validChildren.map((child, index) => {
          const key = typeof child.key !== "undefined" ? child.key : index;
          const isLast = index + 1 === validChildren.length;
          //@ts-ignore
          const _child = <StackItem key={key}>{child}</StackItem>;
          const _divider = isLast ? null : <StackDivider sx={dividerStyle} />;

          return (
            <Fragment key={key}>
              {_child}
              {_divider}
            </Fragment>
          );
        });
  }, [children]);

  return (
    <div
      css={[
        tw`flex w-full`,
        direction === "column" ? tw`flex-col` : tw`flex-row`,
        sx,
      ]}
    >
      {clones}
    </div>
  );
}
