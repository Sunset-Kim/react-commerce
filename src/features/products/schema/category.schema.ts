import { z } from "zod";

export const Category = z.object({
  clothes: z.boolean(),
  shoes: z.boolean(),
});

export type Category = z.infer<typeof Category>;
