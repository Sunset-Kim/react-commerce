import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TwStyle } from "twin.macro";

export interface UIProps<T = unknown>
  extends DetailedHTMLProps<HTMLAttributes<T>, T> {
  sx?: TwStyle | TwStyle[];
}
