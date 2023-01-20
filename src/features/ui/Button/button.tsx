/** @jsxImportSource @emotion/react */

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import tw, { TwStyle } from "twin.macro";
import { ButtonColor, ButtonVariants } from "../types/style.type";
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
}

const buttonStyle = tw`px-4 py-2 rounded w-full flex justify-center items-center outline-0 hover:brightness-110 focus:ring-2 focus:ring-offset-2 transition-colors`;

const variantsStyle: { [variants in ButtonVariants]: TwStyle } = {
  primary: tw`text-white`,
  outlined: tw`border-2 bg-transparent`,
};

const colorStyle: { [color in ButtonColor]: TwStyle } = {
  sky: tw`bg-sky-400 ring-sky-300`,
  green: tw`bg-emerald-400 ring-emerald-300`,
  red: tw`bg-red-400 ring-red-300`,
};

const outlineColorStyle: { [color in ButtonColor]: TwStyle } = {
  red: tw`border-red-400 ring-red-300 hover:bg-red-400 hover:text-white`,
  sky: tw`border-sky-400 ring-sky-300 hover:bg-sky-400 hover:text-white`,
  green: tw`border-green-400 ring-green-300 hover:bg-green-400 hover:text-white`,
};

export default function Button({
  variants = "primary",
  color = "sky",
  sx,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      css={[
        buttonStyle,
        variants === "primary" && colorStyle[color],
        variants === "outlined" && outlineColorStyle[color],
        variantsStyle[variants],
        sx,
      ]}
      {...props}
    >
      {children}
    </button>
  );
}
