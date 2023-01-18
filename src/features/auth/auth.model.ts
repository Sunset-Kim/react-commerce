import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  signOut as signOutFirebase,
} from "firebase/auth";
import { Firebase } from "../common/firebase";

export interface IUser {
  uid: string;
  name: string;
  photoUrl: string;
}

const RANDOM_PREFIX = ["기운찬", "따뜻한", "고운", "쿨한", "멋진"];
const RANDOM_KEYWORD = ["고양이", "강아지", "곰", "호랑이", "사자", "기린"];

export abstract class AuthModel {
  abstract get user(): IUser | null;
  abstract set user(p: IUser | null);

  static convertUserFromFirebase(user: User): IUser {
    const { uid, photoURL, displayName } = user;
    const _user = {
      uid,
      photoUrl: photoURL ?? "",
      name: displayName ?? AuthModel.getRandomNickName(),
    };

    return _user;
  }

  static getRandomNickName() {
    const prefix =
      RANDOM_PREFIX[Math.floor(Math.random() * RANDOM_PREFIX.length)];
    const keyword =
      RANDOM_KEYWORD[Math.floor(Math.random() * RANDOM_KEYWORD.length)];
    return `${prefix} ${keyword} ${Math.floor(Math.random() * 4)}`;
  }
}

export default class FireBaseAuthModel extends AuthModel {
  private _user: IUser | null = null;
  private provider: GoogleAuthProvider;
  auth: Auth;
  private static instance: FireBaseAuthModel;

  private constructor() {
    super();
    this.provider = new GoogleAuthProvider();
    this.auth = Firebase.getInstance().FireAuth;
  }

  static getInstance() {
    if (!FireBaseAuthModel.instance) {
      FireBaseAuthModel.instance = new FireBaseAuthModel();
    }
    return FireBaseAuthModel.instance;
  }

  async signInWithGoogle() {
    const result = await signInWithPopup(this.auth, this.provider);
    this._user = AuthModel.convertUserFromFirebase(result.user);
    return;
  }

  async signOut() {
    await signOutFirebase(this.auth);
    return;
  }

  get user() {
    return this._user;
  }

  set user(user: IUser | null) {
    this._user = user;
  }
}
