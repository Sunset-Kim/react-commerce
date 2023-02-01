/** @jsxImportSource @emotion/react */
import { UIProps } from "@/features/ui";
import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  Ref,
} from "react";
import tw from "twin.macro";

interface ProdcutCategoryProps
  extends UIProps<
      DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    >,
    PropsWithChildren {}

const commonStyle = tw`inline-block px-2 py-0.5 rounded-full text-sm cursor-pointer`;
const checkedStyle = tw`bg-emerald-400 text-white`;

export const ProductCategory = forwardRef(
  (
    { sx, children, ...props }: ProdcutCategoryProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const isChecked = props.checked;

    return (
      <label css={[commonStyle, isChecked && checkedStyle]}>
        <input
          className="hidden"
          type="checkbox"
          ref={ref}
          {...props}
        />
        <span>{children}</span>
      </label>
    );
  }
);

ProductCategory.displayName = "ProductCategory";
