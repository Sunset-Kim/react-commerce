import { PropsWithChildren, ReactNode } from "react";

interface HeaderLayout {
  header: ReactNode;
}

export default function HeaderLayout({
  header,
  children,
}: PropsWithChildren<HeaderLayout>) {
  return (
    <>
      {header}
      {children}
    </>
  );
}
