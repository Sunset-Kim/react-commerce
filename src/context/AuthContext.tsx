import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { User } from "firebase/auth";

interface IAuthContext {
  user: User | null;
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
