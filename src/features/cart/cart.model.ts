import {
  Firestore,
  getDocs,
  doc,
  query,
  collection,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { ServiceModel } from "../common/model.type";
import { IProduct } from "../products";

export default abstract class CartModel implements ServiceModel {
  abstract findAll({ id }: { id: string }): Promise<IProduct[]>;
  abstract add({
    id,
    product,
  }: {
    id: string;
    product: IProduct;
  }): Promise<unknown>;
  abstract delete({
    id,
    productId,
  }: {
    id: string;
    productId: string;
  }): Promise<unknown>;
}

export class CartClient implements CartModel {
  private COLLECTION_NAME = "carts";
  private db: Firestore;

  constructor(fireStore: Firestore) {
    this.db = fireStore;
  }

  async findAll({ id }: { id: string }): Promise<IProduct[]> {
    const q = query(
      collection(this.db, this.COLLECTION_NAME),
      where("id", "==", id)
    );

    const querySnapshot = await getDocs(q);
    const result: IProduct[] = [];
    querySnapshot.forEach((doc) => result.push(doc.data() as IProduct));

    return result;
  }

  async add({ id, product }: { id: string; product: IProduct }) {
    return await setDoc(
      doc(this.db, this.COLLECTION_NAME, id, "product_id"),
      product
    );
  }

  async delete({ id, productId }: { id: string; productId: string }) {
    return await deleteDoc(doc(this.db, this.COLLECTION_NAME, id, productId));
  }
}

export class MockCartClient implements CartModel {
  constructor() {}

  async findAll(): Promise<IProduct[]> {
    const res = await fetch("/data/products.json");
    const result = await res.json();

    return result;
  }

  async add(args: { id: string; product: IProduct }): Promise<unknown> {
    console.log("add", args);
    return;
  }

  async delete(args: { id: string; productId: string }): Promise<unknown> {
    console.log("delete", args);
    return;
  }
}
