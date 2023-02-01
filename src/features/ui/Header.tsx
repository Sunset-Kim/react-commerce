import tw from "twin.macro";
import { Link } from "react-router-dom";
import Button from "./Button/button";
import Text from "./text";
import { useAuth } from "../auth";
import { IconLogout, IconPower, IconShoppingBag } from "@tabler/icons-react";

export default function header() {
  const { user, logout } = useAuth();

  return (
    <div className="mx-auto px-20pxr xl:px-40pxr">
      <div className="py-1">
        <ul className="flex items-center justify-end gap-2">
          <li>
            <Link to="/my/cart">
              <IconShoppingBag size={20} />
            </Link>
          </li>

          <li>
            {user ? (
              <Button
                sx={tw`bg-transparent px-0 py-0`}
                onClick={logout}
              >
                <IconLogout size={20} />
              </Button>
            ) : (
              <Link to="/login">
                <IconPower size={20} />
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between pb-2">
        <Text size="2xl">로고</Text>

        <ul className="flex gap-20pxr">
          <li>
            <Link to="/">
              <Text>SHOP</Text>
            </Link>
          </li>
          <li>
            <Link to="/my">
              <Text>MY</Text>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
