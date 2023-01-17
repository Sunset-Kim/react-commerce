import Carts from "@/pages/my/carts";
import HomePage from "@/pages/home";
import Login from "@/pages/login";
import Products from "@/pages/products";
import ProductDetail from "@/pages/products/id";
import Root from "@/pages/root";
import { RouteObject } from "react-router-dom";
import My from "@/pages/my";
import MyHome from "@/pages/my/my-home";
import Profile from "@/pages/my/profile";

const paths: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <div>not Found</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/login", element: <Login /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/my",
        element: <My />,
        children: [
          {
            index: true,
            element: <MyHome />,
          },
          {
            path: "cart",
            element: <Carts />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
];

export default paths;
