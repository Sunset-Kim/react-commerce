import { z } from "zod";

export const Category = z.union([z.literal("clothes"), z.literal("shoes")]);

export type Category = z.infer<typeof Category>;
