import { IProduct } from "../types";
import ProductItem from "./product-item.component";

interface ProductListProps {
  list: IProduct[];
}

export default function ProductList({ list }: ProductListProps) {
  return (
    <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {list.map((item) => (
        <ProductItem
          key={item.image}
          item={item}
        />
      ))}
    </ul>
  );
}
