import {
  Firestore,
  getDocs,
  doc,
  query,
  collection,
  where,
  setDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore/lite";
import { ServiceModel } from "../common/model.type";
import { IProduct } from "../products";

export default abstract class CartModel implements ServiceModel {
  abstract findAll({ uid }: { uid: string }): Promise<IProduct[]>;
  abstract add({
    uid,
    product,
  }: {
    uid: string;
    product: IProduct;
  }): Promise<unknown>;
  abstract delete({
    uid,
    productId,
  }: {
    uid: string;
    productId: string;
  }): Promise<unknown>;
}

export class CartClient implements CartModel {
  private COLLECTION_NAME = "wishes";
  private db: Firestore;

  constructor(fireStore: Firestore) {
    this.db = fireStore;
  }

  async findAll({ uid }: { uid: string }): Promise<IProduct[]> {
    const querySnapshot = await getDocs(
      collection(this.db, `members/${uid}/${this.COLLECTION_NAME}`)
    );

    return querySnapshot.docs.map((doc) => doc.data() as IProduct);
  }

  async add({ uid, product }: { uid: string; product: IProduct }) {
    return await setDoc(
      doc(this.db, `members/${uid}/${this.COLLECTION_NAME}/${product.name}`),
      product
    );
  }

  async delete({ uid, productId }: { uid: string; productId: string }) {
    return await deleteDoc(
      doc(this.db, `members/${uid}/${this.COLLECTION_NAME}/${productId}`)
    );
  }
}

export class MockCartClient implements CartModel {
  constructor() {}

  async findAll(): Promise<IProduct[]> {
    const res = await fetch("/data/products.json");
    const result = await res.json();

    return result;
  }

  async add(args: { uid: string; product: IProduct }): Promise<unknown> {
    console.log("add", args);
    return;
  }

  async delete(args: { uid: string; productId: string }): Promise<unknown> {
    console.log("delete", args);
    return;
  }
}