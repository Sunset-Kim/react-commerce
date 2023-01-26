import { useState } from "react";

interface ToggleOption {
  initialValue?: boolean;
}

const initialOption: Required<ToggleOption> = {
  initialValue: false,
};

export const useToggle: (option?: ToggleOption) => [boolean, () => void] = (
  option
) => {
  const opt = option ? { ...option, ...initialOption } : initialOption;
  const { initialValue } = opt;

  const [value, setValue] = useState(initialValue);

  const handleToggle = () => setValue((prev) => !prev);

  return [value, handleToggle];
};
