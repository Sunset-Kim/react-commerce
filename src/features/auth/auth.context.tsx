import { useFirebaseAuth } from "@/features/auth/use-firebase-auth";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import type { IUser } from "./auth.client.service";

interface IAuthContext {
  user: IUser | null;
  loading: boolean;
  signInWithGoogle: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: true,
  signInWithGoogle: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const auth = useFirebaseAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
