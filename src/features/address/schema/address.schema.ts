import { z } from "zod";

export const Name = z
  .string()
  .trim()
  .min(2, { message: "2자 이상의 입력값이 필요합니다" });
export type Name = z.infer<typeof Name>;

export const Phone = z.string().regex(/^\d{10,11}$/, {
  message: "올바른 전화번호 형식이 아닙니다",
});
export type Phone = z.infer<typeof Phone>;

export const Address = z
  .object({
    name: Name,
    phone: Phone,
    roadNamecode: z.number(),
    roadAddress: z.string(),
    detailAddress: z.string().optional(),
  })
  .required();
export type Address = z.infer<typeof Address>;

export const AddressResponse = Address.extend({
  id: z.string(),
});
export type AddressResponse = z.infer<typeof AddressResponse>;
