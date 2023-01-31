import debug from "@/utils/debug";
import { Category } from "../schema/category.schema";
import { Product } from "../schema/product.schema";

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

  async getProducts({
    category,
    brand,
  }: {
    category?: Category;
    brand?: string;
  }): Promise<Product[]> {
    const res = (await this.model.findAll({ category, brand })) as Product[];
    return res;
  }
}
