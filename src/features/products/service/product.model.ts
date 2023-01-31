import { Product } from "./../schema/product.schema";
import debug from "@/utils/debug";
import {
  Firestore,
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore/lite";
import { Category } from "../schema/category.schema";

const log = debug("products|model");

export interface IProductModel {
  findAll: (...args: any) => Promise<Product[]>;
  find: (...args: any) => Promise<Product>;
}

export class ProductsModel implements IProductModel {
  private db: Firestore;
  private PRODUCTS_COLLECTION = "products";

  constructor(firestore: Firestore) {
    this.db = firestore;
  }

  async findAll({ category, brand }: { category?: Category; brand?: string }) {
    const categoryQuery = where("category", "==", category);
    const brandQuery = where("brand", "==", brand);

    const defaultQuery = collection(this.db, this.PRODUCTS_COLLECTION);

    const q = category
      ? brand
        ? query(defaultQuery, categoryQuery, brandQuery)
        : query(defaultQuery, categoryQuery)
      : query(defaultQuery);

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => doc.data() as Product);
  }

  async find({ id }: { id: string }) {
    const docRef = doc(this.db, this.PRODUCTS_COLLECTION, id);
    const product = await getDoc(docRef);
    if (product.exists()) {
      return product.data() as Product;
    } else {
      throw Error("데이터가 존재하지 않습니다");
    }
  }
}
