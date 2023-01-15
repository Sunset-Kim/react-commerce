import debug from "@/utils/debug";
import {
  Firestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore/lite";
import { IProduct } from "../types";

const log = debug("products|model");

export interface IProductModel {
  findAll: (...args: any) => Promise<unknown>;
  find: (...args: any) => Promise<unknown>;
  add: (...args: any) => Promise<unknown>;
  update: (...args: any) => Promise<unknown>;
}

export default class ProductsModel implements IProductModel {
  private db: Firestore;
  private PRODUCTS_COLLECTION = "products";

  constructor(firestore: Firestore) {
    this.db = firestore;
  }

  async findAll({ category }: { category?: number }): Promise<IProduct[]> {
    try {
      const q = category
        ? query(
            collection(this.db, this.PRODUCTS_COLLECTION),
            where("category", "==", category)
          )
        : query(collection(this.db, this.PRODUCTS_COLLECTION));

      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map((doc) => doc.data() as IProduct);
    } catch (error) {
      log(error);
      throw new Error("데이터 읽기 실패");
    }
  }

  async find({ id }: { id: string }) {
    try {
      const docRef = doc(this.db, this.PRODUCTS_COLLECTION, id);
      const product = await getDoc(docRef);
      if (product.exists()) {
        return product.data();
      } else {
        throw Error("데이터가 존재하지 않습니다");
      }
    } catch (error) {
      log(error);
      throw error;
    }
  }

  async add(params: any) {
    try {
      const docRef = await addDoc(
        collection(this.db, this.PRODUCTS_COLLECTION),
        params
      );
      log(`success ${docRef.id}`);
      return docRef.id;
    } catch (error) {
      log(error);
      throw new Error("데이터 쓰기 실패");
    }
  }

  //TODO: product 내용 수정
  async update({
    id,
    product,
  }: {
    id: string;
    product: {
      price: number;
    };
  }) {
    await updateDoc(doc(this.db, this.PRODUCTS_COLLECTION, id), product);
  }
}
