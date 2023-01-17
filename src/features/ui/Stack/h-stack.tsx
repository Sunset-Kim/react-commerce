import Stack, { StackProps } from "./stack";

export default function HStack({
  direction = "row",
  isDivder,
  sx,
  children,
  ...props
}: StackProps) {
  return (
    <Stack
      direction={direction}
      isDivder={isDivder}
      sx={sx}
      {...props}
    >
      {children}
    </Stack>
  );
}
