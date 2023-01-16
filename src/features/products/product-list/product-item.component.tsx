import { formatCurrency } from "@/features/fomatter";
import { Card } from "@/features/ui/Card";
import { Link } from "react-router-dom";
import { Category, IProduct } from "../types";

interface ProductItemProps {
  item: IProduct;
}

const BG_COLOR = ["bg-sky-50", "bg-red-50", "bg-purple-50", "bg-stone-100"];

function getRandomBgColor() {
  return BG_COLOR[Math.floor(Math.random() * BG_COLOR.length)];
}

export default function ProductItem({ item }: ProductItemProps) {
  const { name, brand, category, image, price } = item;
  return (
    <li>
      <Link to={"/products/1"}>
        <div
          className={`aspect-square w-full rounded-md ${getRandomBgColor()} shadow-sm`}
        >
          {/* FIXME: 이미지 넣기 */}
          {/* <picture className="w-full object-fill object-center">
            <img
              src={image}
              referrerPolicy="no-referrer"
              alt={name}
            />
          </picture> */}
        </div>

        <div>{brand}</div>
        <div>{name}</div>
        <div>{formatCurrency(price)}</div>
        <div>{category}</div>
      </Link>
    </li>
  );
}
