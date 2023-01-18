import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore/lite";
import { ServiceModel } from "../common/model.type";
import { IUser } from "./auth.client.service";

interface Member extends IUser {
  address?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export default class MemeberModel implements ServiceModel {
  private db: Firestore;
  private COLLECTION_NAME = "members";

  constructor(firestore: Firestore) {
    this.db = firestore;
  }

  async find({ uid }: { uid: string }) {
    const memberRef = collection(this.db, this.COLLECTION_NAME);
    const q = query(memberRef, where("uid", "==", uid));
    const res = await getDocs(q);
    if (res.empty) {
      return null;
    }
    return res.docs.map((doc) => doc.data())[0];
  }

  async add({ member }: { member: Member }) {
    await setDoc(doc(this.db, this.COLLECTION_NAME, member.uid), member);
    return;
  }

  async delete({ uid }: { uid: string }) {
    const memberRef = doc(this.db, this.COLLECTION_NAME, uid);
    await deleteDoc(memberRef);
    return;
  }
}
