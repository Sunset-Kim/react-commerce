import HeaderLayout from "@/layouts/HeaderLayout";
import Header from "@/features/ui/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <HeaderLayout header={<Header />}>
      <Outlet />
    </HeaderLayout>
  );
}
