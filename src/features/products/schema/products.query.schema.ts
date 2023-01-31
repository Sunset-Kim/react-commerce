import { z } from "zod";
import { Category } from "./category.schema";

export const ProductQuery = z
  .object({
    category: Category,
    brand: z.string(),
  })
  .partial()
  .optional();

export type ProductQuery = z.infer<typeof ProductQuery>;
