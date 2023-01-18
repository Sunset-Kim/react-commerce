import { useFirebaseAuth } from "@/features/auth/use-firebase-auth";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import type { IUser } from "./auth.model";

interface IAuthContext {
  user: IUser | null;
  signInWithGoogle: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  signInWithGoogle: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const auth = useFirebaseAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
