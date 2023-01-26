/** @jsxImportSource @emotion/react */
import { ForwardedRef, forwardRef } from "react";
import tw from "twin.macro";
import { useFormControl } from "../Form/use-form-control";
import { UIProps } from "../types/common.type";

interface InputProps
  extends UIProps<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  > {}

const inputStyle = tw`py-1 border-b-2 w-full placeholder-gray-400 outline-0 focus:border-b-2 focus:border-blue-400 transition-colors rounded appearance-none`;
const readOnlyStyle = tw`bg-gray-50 cursor-not-allowed`;
const disabledStyle = tw`text-gray-400 bg-gray-100`;

export const Input = forwardRef(function Input(
  { sx, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const input = useFormControl<HTMLInputElement>(props);

  return (
    <input
      ref={ref}
      css={[
        inputStyle,
        input.readOnly && readOnlyStyle,
        input.disabled && disabledStyle,
        sx,
      ]}
      {...input}
      {...props}
    />
  );
});
export default Input;
