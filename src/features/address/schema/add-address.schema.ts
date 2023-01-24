import { z } from "zod";
import { Address } from "./address.schema";

export const AddAddress = z.object({
  uid: z.string(),
  address: Address,
});

export type AddAddress = z.infer<typeof AddAddress>;
