import { z } from "zod";
import { AddAddress } from "./add-address.schema";

export const UpdateAddress = AddAddress.extend({
  id: z.string(),
});

export type UpdateAddress = z.infer<typeof UpdateAddress>;
