/** @jsxImportSource @emotion/react */
import { ElementType, HTMLAttributes, PropsWithChildren } from "react";
import tw, { TwStyle } from "twin.macro";
import styled from "@emotion/styled";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type Weight = "300" | "400" | "500" | "600" | "700" | "800" | "900";

const StyledText = styled.p``;
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: Size;
  weight?: Weight;
  sx?: TwStyle;
  as?: ElementType<any>;
}

const sizeStyle: { [size in Size]: TwStyle } = {
  xs: tw`text-xs`,
  sm: tw`text-sm`,
  md: tw``,
  lg: tw`text-lg`,
  xl: tw`text-xl`,
  "2xl": tw`text-2xl`,
};

const fontWeightStyle: { [weight in Weight]: TwStyle } = {
  "300": tw`[font-weight: 300]`,
  "400": tw`[font-weight: 400]`,
  "500": tw`[font-weight: 500]`,
  "600": tw`[font-weight: 600]`,
  "700": tw`[font-weight: 700]`,
  "800": tw`[font-weight: 800]`,
  "900": tw`[font-weight: 900]`,
};

export default function Text({
  size = "md",
  weight = "400",
  children,
  sx,
  as,
}: PropsWithChildren<TextProps>) {
  return (
    <StyledText
      as={as}
      css={[sizeStyle[size], fontWeightStyle[weight], sx]}
    >
      {children}
    </StyledText>
  );
}
