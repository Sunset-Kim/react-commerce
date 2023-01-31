import { z } from "zod";

export const Product = z.object({
  id: z.string(),
  brand: z.string(),
  category: z.string(),
  createdAt: z.string().datetime(),
  name: z.string(),
  price: z.number(),
});

export type Product = z.infer<typeof Product>;
