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
import PrivateRoute from "./private-route";
import Address from "@/pages/my/address";
import { Suspense } from "react";
import { Spinner } from "@/features/ui/Loading";

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
        element: (
          <PrivateRoute>
            <My />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <MyHome />,
          },
          {
            path: "carts",
            element: (
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center">
                    <Spinner />
                  </div>
                }
              >
                <Carts />
              </Suspense>
            ),
          },
          {
            path: "profile",
            element: (
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center">
                    <Spinner />
                  </div>
                }
              >
                <Profile />
              </Suspense>
            ),
          },
          {
            path: "address",
            element: (
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center">
                    <Spinner />
                  </div>
                }
              >
                <Address />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];

export default paths;
