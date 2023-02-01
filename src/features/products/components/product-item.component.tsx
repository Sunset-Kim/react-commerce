import { useCartConrol } from "@/features/cart";
import { formatCurrency } from "@/features/fomatter";
import Button from "@/features/ui/Button/button";
import Text from "@/features/ui/text";
import { getCloudImg } from "@/utils/get-cloud-img";
import { IconShoppingCart } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import { Product } from "../schema/product.schema";

interface ProductItemProps {
  item: Product;
}

const BG_COLOR = ["bg-sky-50", "bg-red-50", "bg-purple-50", "bg-stone-100"];

function getRandomBgColor() {
  return BG_COLOR[Math.floor(Math.random() * BG_COLOR.length)];
}

export default function ProductItem({ item }: ProductItemProps) {
  const { id, name, brand, category, price } = item;
  const { addCart } = useCartConrol();
  return (
    <li>
      <Link to={`/products/${id}`}>
        <div
          className={`aspect-square w-full rounded-xl ${getRandomBgColor()} mb-2 shadow-sm`}
        >
          <picture className="w-full object-fill object-center">
            <img
              src={getCloudImg(id)}
              alt={name}
            />
          </picture>
        </div>

        <div className="mb-2">
          <Text
            size="sm"
            weight="500"
          >
            {brand}
          </Text>
          <Text
            size="sm"
            sx={tw`text-stone-500 mb-2`}
          >
            {name}
          </Text>
        </div>
      </Link>

      <div className="mb-8 flex items-center justify-between">
        <div>
          <Text weight="700">{formatCurrency(price)}</Text>
          <Text
            size="xs"
            sx={tw`text-stone-500`}
          >
            즉시 구매가
          </Text>
        </div>

        <button
          className="cursor-pointer rounded-full px-1 py-1 transition-colors hover:bg-sky-200/75"
          onClick={() => addCart(item)}
        >
          <IconShoppingCart
            size={18}
            stroke={1}
          />
        </button>
      </div>
    </li>
  );
}
