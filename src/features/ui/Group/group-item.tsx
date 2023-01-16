import { PropsWithChildren } from "react";

export default function GroupItem({ children }: PropsWithChildren) {
  return <div className="flex-1">{children}</div>;
}
