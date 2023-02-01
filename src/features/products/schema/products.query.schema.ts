import { z } from "zod";
import { Brand } from "./brand.schema";
import { Category } from "./category.schema";

export const ProductsQuery = z
  .object({
    category: Category,
    brand: Brand,
  })
  .partial()
  .optional();

export type ProductsQuery = z.infer<typeof ProductsQuery>;
