import { CATEGORY_MAP } from "@/constants/map/category_map";
import { ProductCategory } from "@/features/products";
import ProductList from "@/features/products/components/product-list.component";
import { Brand } from "@/features/products/schema/brand.schema";
import { Category } from "@/features/products/schema/category.schema";
import { useProducts } from "@/features/products/use-products";
import Error500 from "@/features/ui/Errors/error-500";
import {
  FilterItem,
  FilterList,
  FilterDescription,
  FilterTerm,
  FilterSummary,
} from "@/features/ui/Filter";

import debug from "@/utils/debug";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import tw from "twin.macro";

const log = debug("Page | products :");

interface FormState {
  category: Category;
  brand: Brand;
}

export default function Products() {
  const { register, watch, control } = useForm<FormState>({
    mode: "onChange",
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = watch("category");

  const {
    products: { data },
    categories: { data: categoriesData },
  } = useProducts();

  if (!data || data.length === 0) {
    return <div>조건에 맞는 아이템이 없습니다</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <FilterList>
          <FilterItem>
            <FilterTerm>카테고리</FilterTerm>
            <FilterDescription>
              {categoriesData?.map((field) => (
                <ProductCategory
                  key={field}
                  checked={searchParams.getAll("category").includes(field)}
                  {...register(`category.${field}`, {
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                      const checked = e.target.checked;

                      if (checked) {
                        setSearchParams((prev) => {
                          prev.append("category", field);
                          console.log(prev.getAll("category"));
                          return prev;
                        });
                      } else {
                        setSearchParams((prev) => {
                          const params = prev
                            .getAll("category")
                            .filter((param) => param !== field);

                          params.length
                            ? prev.set("category", params.toString())
                            : prev.delete("category");

                          return prev;
                        });
                      }
                    },
                  })}
                >
                  {CATEGORY_MAP[field]}
                </ProductCategory>
              ))}
            </FilterDescription>
          </FilterItem>

          <FilterItem>
            <FilterTerm>적용된 필터</FilterTerm>
            <FilterDescription></FilterDescription>
          </FilterItem>
        </FilterList>
      </div>

      <ProductList list={data} />
    </div>
  );
}
