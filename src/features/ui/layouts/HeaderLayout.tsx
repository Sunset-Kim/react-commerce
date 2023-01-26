/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { PropsWithChildren, ReactNode } from "react";
import Stack from "../Stack/stack";

interface HeaderLayout {
  header: ReactNode;
}

export default function HeaderLayout({
  header,
  children,
}: PropsWithChildren<HeaderLayout>) {
  return (
    <Stack sx={tw`h-full`}>
      <header>{header}</header>
      <main className="flex-1">{children}</main>
    </Stack>
  );
}
