import { z } from "zod";

export const Brand = z.record(z.boolean());

export type Brand = z.infer<typeof Brand>;
