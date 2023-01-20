/** @jsxImportSource @emotion/react */
import { formatCurrency } from "@/features/fomatter";
import tw from "twin.macro";
import HStack from "../Stack/h-stack";
import Text from "../text";
import Button, { ButtonProps } from "./button";

interface SaleButtonProps extends ButtonProps {
  role: "buy" | "sell";
  price: number;
}

export default function SaleButton({
  role,
  price,
  sx,
  ...props
}: SaleButtonProps) {
  const isBuy = role === "buy";

  return (
    <Button
      css={[tw`justify-start rounded-lg p-0`, sx]}
      {...props}
      color={isBuy ? "red" : "green"}
      variants="primary"
    >
      <HStack isDivder>
        <div className="flex h-full w-full items-center justify-center px-2">
          <Text
            weight="700"
            size="xl"
          >
            {isBuy ? "구매" : "판매"}
          </Text>
        </div>

        <div className="px-2 py-2 text-left">
          <p>{formatCurrency(price)}</p>
          <Text size="xs">즉시구매가</Text>{" "}
        </div>
      </HStack>
    </Button>
  );
}
