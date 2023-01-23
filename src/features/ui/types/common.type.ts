import { Merge } from "./../../../utils/types";
import { TwStyle } from "twin.macro";

export type UIProps<T = unknown> = Merge<{ sx?: TwStyle | TwStyle[] }, T>;
