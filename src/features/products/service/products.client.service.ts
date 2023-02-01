import debug from "@/utils/debug";
import { Category } from "../schema/category.schema";
import { Product } from "../schema/product.schema";
import { ProductsQuery } from "../schema/products.query.schema";

import { IProductModel } from "./product.model";

const log = debug("products|client|service :");

export class ProdcutsClientService {
  private model: IProductModel;
  constructor(model: IProductModel) {
    this.model = model;
  }

  async getProduct({ id }: { id: string }) {
    const res = (await this.model.find({ id })) as Product;
    log(res);
    return res;
  }

  async getProducts(options: ProductsQuery = {}): Promise<Product[]> {
    const { category, brand } = options;
    const res = (await this.model.findAll({ category, brand })) as Product[];
    return res;
  }

  async getCategories(): Promise<(keyof Category)[]> {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(["clothes", "shoes"]);
      }, 1000)
    );
  }
}
