/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import "twin.macro";

interface NavLayoutProps {
  nav: React.ReactNode;
}

export default function NavLayout({
  nav,
  children,
}: PropsWithChildren<NavLayoutProps>) {
  return (
    <div tw="flex h-full">
      <div>{nav}</div>
      <div tw="flex-1">{children}</div>
    </div>
  );
}
