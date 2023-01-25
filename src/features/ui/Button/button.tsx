/** @jsxImportSource @emotion/react */

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import tw, { TwStyle } from "twin.macro";
import { ButtonColor, ButtonSize, ButtonVariants } from "../types/style.type";
import { UIProps } from "../types/common.type";

export interface ButtonProps
  extends UIProps<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  variants?: ButtonVariants;
  color?: ButtonColor;
  size?: ButtonSize;
}

const buttonStyle = tw`rounded  flex justify-center items-center outline-0 hover:brightness-110 focus:ring-2 focus:ring-offset-2 transition-colors`;
const disabledStyle = tw`bg-transparent border-gray-400 border-1 text-black pointer-events-none`;

const variantsStyle: { [variants in ButtonVariants]: TwStyle } = {
  primary: tw`text-white`,
  outlined: tw`border-1 bg-transparent`,
};

const colorStyle: { [color in ButtonColor]: TwStyle } = {
  sky: tw`bg-sky-400 ring-sky-300`,
  green: tw`bg-emerald-400 ring-emerald-300`,
  red: tw`bg-red-400 ring-red-300`,
  default: tw`bg-gray-200 text-stone-900 ring-gray-300 hover:brightness-90`,
};

const outlineColorStyle: { [color in ButtonColor]: TwStyle } = {
  red: tw`border-red-400 ring-red-300 hover:bg-red-400 hover:text-white`,
  sky: tw`border-sky-400 ring-sky-300 hover:bg-sky-400 hover:text-white`,
  green: tw`border-green-400 ring-green-300 hover:bg-green-400 hover:text-white`,
  default: tw`border-stone-200 ring-stone-300 hover:bg-stone-800 hover:text-white`,
};

const sizeStyle: { [size in ButtonSize]: TwStyle } = {
  sm: tw`py-2 px-3`,
  md: tw`py-2.5 px-4`,
  lg: tw`py-3 px-5`,
  full: tw`w-full py-2 px-4`,
};

export default function Button({
  variants = "primary",
  color = "default",
  size = "full",
  sx,
  children,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      css={[
        buttonStyle,
        sizeStyle[size],
        variantsStyle[variants],
        variants === "primary" && colorStyle[color],
        variants === "outlined" && outlineColorStyle[color],
        disabled && disabledStyle,
        sx,
      ]}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
