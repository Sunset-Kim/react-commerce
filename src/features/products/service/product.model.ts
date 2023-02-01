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
import { ProductsQuery } from "../schema/products.query.schema";

const log = debug("products|model");

export interface IProductModel {
  findAll: (...args: any) => Promise<Product[]>;
  find: (...args: any) => Promise<Product>;
}

export class ProductsModel implements IProductModel {
  private db: Firestore;
  private PRODUCTS_COLLECTION = "products";
  private CATEGORY_COLLECTION = "categories";

  constructor(firestore: Firestore) {
    this.db = firestore;
  }

  async findAll(option: ProductsQuery = {}) {
    const { category, brand } = option;

    const categoryArray = category && [
      ...Object.keys(category).filter((key) => category[key as keyof Category]),
    ];

    const brandArray = brand && [
      ...Object.keys(brand).filter((key) => brand[key]),
    ];

    const categoryQuery =
      categoryArray?.length && where("category", "in", categoryArray);

    const defaultQuery = collection(this.db, this.PRODUCTS_COLLECTION);

    const q = categoryQuery
      ? query(defaultQuery, categoryQuery)
      : query(defaultQuery);

    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map((item) => item.data() as Product);

    return brandArray?.length
      ? products.filter((product) => brandArray.includes(product.brand))
      : products;
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

  async findAllCategories() {
    const categoryRef = collection(this.db, this.CATEGORY_COLLECTION);
    const categories = await getDocs(categoryRef);

    return categories.docs.map((doc) => doc.data() as { name: string });
  }
}
