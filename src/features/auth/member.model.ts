import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  query,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore/lite";
import { ServiceModel } from "../common/model.type";
import { Member } from "./schema/member.schema";
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
    await setDoc(doc(this.db, this.COLLECTION_NAME, member.uid), {
      ...member,
      createdAt: Timestamp.now(),
    });
    return;
  }

  async update({ member }: { member: Member }) {
    await setDoc(doc(this.db, this.COLLECTION_NAME, member.uid), {
      ...member,
      updatedAt: Timestamp.now(),
    });
  }

  async delete({ uid }: { uid: string }) {
    const memberRef = doc(this.db, this.COLLECTION_NAME, uid);
    await deleteDoc(memberRef);
    return;
  }
}
