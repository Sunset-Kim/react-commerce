import Carts from "@/pages/carts";
import HomePage from "@/pages/home";
import Login from "@/pages/login";
import Products from "@/pages/products";
import ProductDetail from "@/pages/products/id";
import Root from "@/pages/root";
import { RouteObject } from "react-router-dom";

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
        path: "/carts",
        element: <Carts />,
      },
    ],
  },
];

export default paths;
