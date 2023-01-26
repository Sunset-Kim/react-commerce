import Stack, { StackProps } from "./stack";

export default function HStack({
  direction = "row",
  isDivider,
  sx,
  children,
  ...props
}: StackProps) {
  return (
    <Stack
      direction={direction}
      isDivider={isDivider}
      sx={sx}
      {...props}
    >
      {children}
    </Stack>
  );
}
