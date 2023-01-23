/** @jsxImportSource @emotion/react */
import { FormEvent } from "react";
import tw from "twin.macro";
import { DetailedHTMLProps, forwardRef, LabelHTMLAttributes } from "react";
import { UIProps } from "../types/common.type";
import { useFormControlContext } from "./form-control";

export interface FormLabelProps
  extends UIProps<
    DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
  > {}

const labelStyle = tw`font-bold text-sm`;

export const FormLabel = forwardRef(function FormLabel(
  props: FormLabelProps,
  ref
) {
  const { className, children, sx, ...rest } = props;
  const field = useFormControlContext();
  const ownProps = field?.getLabelProps(rest, ref) ?? { ref, ...rest };

  return (
    <label
      className={className}
      css={[labelStyle, sx]}
      {...ownProps}
    >
      {children}
    </label>
  );
});
