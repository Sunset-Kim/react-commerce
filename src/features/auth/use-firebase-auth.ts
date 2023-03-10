import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import debug from "@/utils/debug";
import AuthModel from "./auth.client.service";
import FireBaseAuthService from "./auth.client.service";
import { CustomUser } from "./schema/user.schema";

const log = debug("hook|useFirebaseAuth ::");

export const useFirebaseAuth = () => {
  const authService = FireBaseAuthService.getInstance();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<CustomUser | null>(authService.user);

  const updateUser = useCallback((user: CustomUser | null) => {
    authService.user = user;
    setUser(user);
  }, []);

  async function signInWithGoogle() {
    try {
      await authService.signInWithGoogle();
    } catch (error) {
      log(error);
    }
  }

  async function logout() {
    try {
      await authService.signOut();
    } catch (error) {
      log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authService.auth, (user) => {
      setLoading(true);
      if (user) {
        updateUser(AuthModel.convertUserFromFirebase(user));
      } else {
        updateUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    loading,
    user,
    signInWithGoogle,
    logout,
  };
};
