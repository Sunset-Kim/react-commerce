import { useAuth } from "@/features/auth";
import { ScreenLoading } from "@/features/ui/Loading";
import { PropsWithChildren, ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: PropsWithChildren) {
  const { user, loading } = useAuth();

  if (loading) {
    return <ScreenLoading />;
  }

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
