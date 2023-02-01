import { ServiceModel } from "@/features/common";
import {
  Firestore,
  getDocs,
  doc,
  collection,
  setDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore/lite";
import type {
  AddAddress,
  AddressResponse,
  DeleteAddress,
  UpdateAddress,
} from "../schema";

export default abstract class AddressModel implements ServiceModel {
  abstract findAll({ uid }: { uid: string }): Promise<AddressResponse[]>;
  abstract add({ uid, address }: AddAddress): Promise<unknown>;
  abstract update({ uid, id, address }: UpdateAddress): Promise<unknown>;
  abstract delete({ uid, id }: DeleteAddress): Promise<unknown>;
}

export class AddressClient implements AddressModel {
  private COLLECTION_NAME = "addresses";
  private db: Firestore;

  constructor(fireStore: Firestore) {
    this.db = fireStore;
  }

  async findAll({ uid }: { uid: string }): Promise<AddressResponse[]> {
    const querySnapshot = await getDocs(
      collection(this.db, `members/${uid}/${this.COLLECTION_NAME}`)
    );

    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      } as AddressResponse;
    });
  }

  async add({ uid, address }: AddAddress) {
    return await addDoc(
      collection(this.db, `members/${uid}/${this.COLLECTION_NAME}`),
      address
    );
  }

  async update({ uid, id, address }: UpdateAddress) {
    return await setDoc(
      doc(this.db, `members/${uid}/${this.COLLECTION_NAME}/${id}`),
      address
    );
  }

  async delete({ uid, id }: DeleteAddress) {
    return await deleteDoc(
      doc(this.db, `members/${uid}/${this.COLLECTION_NAME}/${id}`)
    );
  }
}
