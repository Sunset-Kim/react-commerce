import { SafeParseReturnType, ZodFormattedError, ZodSchema } from "zod";

interface ValidateResult<T> {
  success: boolean;
  result?: SafeParseReturnType<T, T>;
  error?: ZodFormattedError<T, string>;
}

export function validate<T>(z: ZodSchema<T>, value: any): ValidateResult<T> {
  const result = z.safeParse(value);

  if (result.success) {
    return {
      success: true,
      result,
    };
  }

  return {
    success: false,
    error: result.error.format(),
  };
}
