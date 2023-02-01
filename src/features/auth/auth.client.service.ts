import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  signOut as signOutFirebase,
} from "firebase/auth";
import { Firebase } from "../common/firebase";
import MemeberModel from "./member.model";
import { Member } from "./schema/member.schema";
import { CustomUser } from "./schema/user.schema";

const RANDOM_PREFIX = ["기운찬", "따뜻한", "고운", "쿨한", "멋진"];
const RANDOM_KEYWORD = ["고양이", "강아지", "곰", "호랑이", "사자", "기린"];

export abstract class AuthService {
  abstract get user(): CustomUser | null;
  abstract set user(p: CustomUser | null);

  static convertUserFromFirebase(user: User): CustomUser {
    const { uid, photoURL, displayName, email } = user;
    const _user = {
      uid,
      photoUrl: photoURL ?? "",
      email: email ?? undefined,
      name: displayName ?? AuthService.getRandomNickName(),
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

export default class FireBaseAuthService extends AuthService {
  private _user: CustomUser | null = null;
  private provider: GoogleAuthProvider;
  private memberModel: MemeberModel;
  auth: Auth;
  private static instance: FireBaseAuthService;

  private constructor() {
    super();
    this.provider = new GoogleAuthProvider();
    this.auth = Firebase.getInstance().FireAuth;
    this.memberModel = new MemeberModel(Firebase.getInstance().FireStore);
  }

  static getInstance() {
    if (!FireBaseAuthService.instance) {
      FireBaseAuthService.instance = new FireBaseAuthService();
    }
    return FireBaseAuthService.instance;
  }

  async signInWithGoogle() {
    const result = await signInWithPopup(this.auth, this.provider);

    if (result) {
      const user = AuthService.convertUserFromFirebase(result.user);
      const member = await this.memberModel.find({ uid: result.user.uid });

      if (member === null) {
        this.memberModel.add({
          member: {
            ...user,
            nickname: AuthService.getRandomNickName(),
          },
        });
      }

      return member;
    }
  }

  async signOut() {
    await signOutFirebase(this.auth);
    return;
  }

  get user() {
    return this._user;
  }

  set user(user: CustomUser | null) {
    this._user = user;
  }
}
