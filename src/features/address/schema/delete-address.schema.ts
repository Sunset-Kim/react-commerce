import { z } from "zod";
import { Address } from "./address.schema";
import { UpdateAddress } from "./update-address.schema";

export const DeleteAddress = UpdateAddress.omit({ address: true });

export type DeleteAddress = z.infer<typeof DeleteAddress>;
