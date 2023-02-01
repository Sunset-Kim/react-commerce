import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import tw from "twin.macro";
import Stack from "../ui/Stack/stack";

export default function CartList({
  children,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) {
  return (
    <Stack
      isDivider
      sx={tw`gap-20pxr`}
      {...props}
    >
      {children}
    </Stack>
  );
}
