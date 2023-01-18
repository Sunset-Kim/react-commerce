import { useCallback, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import debug from "@/utils/debug";
import AuthModel, { IUser } from "./auth.client.service";
import FireBaseAuthService from "./auth.client.service";
import { Firebase } from "../common/firebase";

const log = debug("hook|useFirebaseAuth ::");

export const useFirebaseAuth = () => {
  const authService = FireBaseAuthService.getInstance();
  const [user, setUser] = useState<IUser | null>(authService.user);

  const updateUser = useCallback((user: IUser | null) => {
    authService.user = user;
    setUser(user);
  }, []);

  async function signInWithGoogle() {
    try {
      const result = authService.signInWithGoogle();
      log(result);
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
      if (user) {
        updateUser(AuthModel.convertUserFromFirebase(user));
      } else {
        updateUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    user,
    signInWithGoogle,
    logout,
  };
};
