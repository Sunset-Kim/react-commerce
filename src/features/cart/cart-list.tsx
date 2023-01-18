import { PropsWithChildren } from "react";
import tw from "twin.macro";
import Stack from "../ui/Stack/stack";

export default function CartList({ children }: PropsWithChildren) {
  return (
    <Stack
      isDivder
      sx={tw`gap-20pxr`}
    >
      {children}
    </Stack>
  );
}
