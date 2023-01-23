import { useFormControlContext, UseFormControlProps } from "./form-control";

export function callAllHandlers<T extends (event: any) => void>(
  ...fns: (T | undefined)[]
) {
  return function func(event: any) {
    fns.some((fn) => {
      fn?.(event);
      return event?.defaultPrevented;
    });
  };
}

export function useFormControl<T extends HTMLElement>(
  props: UseFormControlProps<T>
) {
  const { isDisabled, isInvalid, isReadOnly, isRequired, ...rest } =
    useFormControlProps(props);

  return {
    ...rest,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
  };
}

export function useFormControlProps<T extends HTMLElement>(
  props: UseFormControlProps<T>
) {
  const field = useFormControlContext();

  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    onFocus,
    onBlur,
    ...rest
  } = props;

  return {
    ...rest,
    id: id ?? field?.id,
    isDisabled: disabled ?? isDisabled ?? field?.isDisabled,
    isReadOnly: readOnly ?? isReadOnly ?? field?.isReadOnly,
    isRequired: required ?? isRequired ?? field?.isRequired,
    isInvalid: isInvalid ?? field?.isInvalid,
    onFocus: callAllHandlers(field?.onFocus, onFocus),
    onBlur: callAllHandlers(field?.onBlur, onBlur),
  };
}
