import { Category } from "@/features/products/schema/category.schema";

export const CATEGORY_MAP: Record<keyof Category, string> = {
  clothes: "의류",
  shoes: "신발",
};

export const categoryMapper = (key: string) => {
  if (key in CATEGORY_MAP) {
    return CATEGORY_MAP[key as keyof Category];
  }

  return;
};
