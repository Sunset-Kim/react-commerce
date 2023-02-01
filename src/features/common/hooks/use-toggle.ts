import { useState } from "react";

interface ToggleOption {
  initialValue?: boolean;
}

const initialOption: Required<ToggleOption> = {
  initialValue: false,
};

export const useToggle: (
  option?: ToggleOption
) => [boolean, (value?: boolean) => void] = (option) => {
  const opt = option ? { ...option, ...initialOption } : initialOption;
  const { initialValue } = opt;

  const [value, setValue] = useState(initialValue);

  const handleToggle = (value?: boolean) => setValue((prev) => value ?? !prev);

  return [value, handleToggle];
};
