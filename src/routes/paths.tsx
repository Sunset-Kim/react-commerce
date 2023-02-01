import Carts from "@/pages/my/carts";
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
import { ScreenLoading, Spinner } from "@/features/ui/Loading";
import Error500 from "@/features/ui/Errors/error-500";

const paths: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <Error500 />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<ScreenLoading />}>
            <Products />
          </Suspense>
        ),
      },
      { path: "/login", element: <Login /> },
      {
        path: "/products/:id",
        element: (
          <Suspense fallback={<ScreenLoading />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/my",
        element: (
          <Suspense fallback={<ScreenLoading />}>
            <PrivateRoute>
              <My />
            </PrivateRoute>
          </Suspense>
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
