import Carts from "@/pages/carts";
import HomePage from "@/pages/home";
import Products from "@/pages/products";
import ProductDetail from "@/pages/products/id";
import Root from "@/pages/root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>not Found</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
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
]);

export default router;
