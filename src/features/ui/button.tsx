/** @jsxImportSource @emotion/react */
import { Color } from "@/styles/bg-color";
import { PropsWithChildren } from "react";
import tw, { TwStyle } from "twin.macro";
import { UIProps } from "./ui.type";

interface ButtonProps extends UIProps<HTMLButtonElement> {
  variants?: Variants;
  color?: Color;
}

type Variants = "primary" | "outlined";

const buttonStyle = tw`px-4 py-2 rounded w-full flex justify-center items-center`;

const variantsStyle: { [variants in Variants]: TwStyle } = {
  primary: tw`text-white`,
  outlined: tw`border text-slate-700`,
};

const colorStyle: { [color in Color]: TwStyle } = {
  sky: tw`bg-sky-400 border-sky-400`,
  green: tw`bg-emerald-400 border-emerald-400 `,
  red: tw`bg-red-400 border-red-400`,
};

export default function Button({
  variants = "primary",
  color = "sky",
  sx,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      css={[
        buttonStyle,
        variantsStyle[variants],
        color && colorStyle[color],
        sx,
      ]}
    >
      {children}
    </button>
  );
}
