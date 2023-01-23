import { HTMLProps } from "react";

export type Merge<T, P> = P & Omit<T, keyof P>;

export type PropGetter<T extends HTMLElement = any, P = {}> = (
  props?: Merge<HTMLProps<T>, P>,
  ref?: React.Ref<any> | React.RefObject<any>
) => Merge<HTMLProps<T>, P>;
