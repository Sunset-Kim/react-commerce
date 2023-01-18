/** @jsxImportSource @emotion/react */
import NavLayout from "@/features/ui/layouts/nav.layout";
import MyNav from "@/features/my/my-nav.component";
import { Link, Outlet } from "react-router-dom";
import tw from "twin.macro";

export default function My() {
  return (
    <NavLayout nav={<MyNav />}>
      <Outlet />
    </NavLayout>
  );
}
