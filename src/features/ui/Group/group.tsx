/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import { cloneElement, Children } from "react";
import tw, { TwStyle } from "twin.macro";
import { UIProps } from "../ui.type";
import GroupItem from "./group-item";

type Align = "center" | "start" | "end";

interface GroupsProps extends UIProps {
  align?: Align;
}

const alignItems: { [align in Align]: TwStyle } = {
  center: tw`items-center`,
  start: tw`items-start`,
  end: tw`items-end`,
};

export default function Group({
  sx,
  align = "center",
  children,
}: PropsWithChildren<GroupsProps>) {
  const newChildren = Children.map(children, (child) => {
    return <GroupItem>{child}</GroupItem>;
  });

  return (
    <div css={[tw`flex flex-wrap`, alignItems[align], sx]}>{newChildren}</div>
  );
}
