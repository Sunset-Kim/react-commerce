import { Params } from "react-router-dom";

export function getValidParam({
  param,
  field,
}: {
  param: Params<string>;
  field: string;
}) {
  if (param[field]) {
    return param[field];
  }
}
