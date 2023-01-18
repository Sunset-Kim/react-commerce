import { useAuth } from "@/features/auth";
import { PropsWithChildren, ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: PropsWithChildren) {
  const { user } = useAuth();

  if (user === null) {
    return (
      <Navigate
        to="/login"
        state={{ path: window.location.pathname }}
      />
    );
  }

  return <>{children}</>;
}
