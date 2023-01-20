/** @jsxImportSource @emotion/react */
import { createContext } from "@/features/common/react-context";
import { PropGetter } from "@/utils/types";
import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  useCallback,
  useId,
  useState,
} from "react";
import tw from "twin.macro";
import { UIProps } from "../types/common.type";

export interface FormControlOptions {
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
}

interface FormControlContext extends FormControlOptions {
  label?: string;
  id?: string;
}

export interface UseFormControlProps<T extends HTMLElement>
  extends FormControlOptions {
  id?: string;
  onFocus?: React.FocusEventHandler<T>;
  onBlur?: React.FocusEventHandler<T>;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
}

type FormControlProviderContext = Omit<
  ReturnType<typeof useFormControlProvider>,
  "getRootProps" | "htmlProps"
>;

export function useFormControlProvider(props: FormControlContext) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;

  // Generate all the required ids
  const uuid = useId();
  const id = idProp || `field-${uuid}`;

  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;

  const [hasFeedbackText, setHasFeedbackText] = useState(false);
  const [hasHelpText, setHasHelpText] = useState(false);
  const [isFocused, setFocus] = useState(false);

  const getRootProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ...htmlProps,
      ref: forwardedRef,
      role: "group",
    }),
    [htmlProps]
  );

  const getLabelProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      id: props.id ?? labelId,
      htmlFor: props.htmlFor ?? id,
    }),
    [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId]
  );

  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getRootProps,
    getLabelProps,
  };
}

const [FormControlProvider, useFormControlContext] =
  createContext<FormControlProviderContext>({
    strict: false,
    name: "FormControlContext",
  });

export { useFormControlContext };

export interface FormControlProps
  extends UIProps<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    >,
    FormControlContext {}

export const FormControl = forwardRef(function FormControl(
  props: FormControlProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const {
    getRootProps,
    htmlProps: _,
    ...context
  } = useFormControlProvider(props);
  return (
    <FormControlProvider value={context}>
      <div {...getRootProps({}, ref)} />
    </FormControlProvider>
  );
});
