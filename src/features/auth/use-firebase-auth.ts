import { useEffect, useState } from "react";
import {
  User,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import debug from "@/utils/debug";
import { Firebase } from "@/features/common/firebase";

const log = debug("hook|useFirebaseAuth ::");
const auth = Firebase.getInstance().FireAuth;
const provider = new GoogleAuthProvider();

export const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      log(result);
    } catch (error) {
      log(error);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
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
