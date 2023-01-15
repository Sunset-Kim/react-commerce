import debug from "@/utils/debug";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore/lite";
import { Auth, getAuth } from "firebase/auth";
import APP_CONFIG from "@/config";

const log = debug("Firebase|client");

export class Firebase {
  private static _instance: Firebase;
  private firestore!: Firestore;
  private auth!: Auth;

  private constructor() {
    if (Firebase._instance) {
      return Firebase._instance;
    }

    this.bootstrap();
  }

  private bootstrap() {
    log("bootstrap start");
    if (getApps().length > 1) return;

    const app = initializeApp(APP_CONFIG.firebase);
    this.firestore = getFirestore(app);
    this.auth = getAuth(app);
    log("bootstrap end");
  }

  get FireStore(): Firestore {
    if (!this.firestore) {
      this.bootstrap();
    }
    return this.firestore;
  }

  get FireAuth(): Auth {
    if (!this.auth) {
      this.bootstrap();
    }
    return this.auth;
  }

  public static getInstance() {
    if (!Firebase._instance) {
      Firebase._instance = new Firebase();
    }
    return Firebase._instance;
  }
}
