import { Product } from "../../schema/product.schema";
import { IProductModel } from "../product.model";

export class ProductMockModel implements IProductModel {
  constructor() {}

  async findAll({ category }: { category?: number }) {
    return await fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => data as Product[]);
  }

  async find({ id }: { id: string }) {
    return await fetch("/data/product_1.json")
      .then((res) => res.json())
      .then((data) => data as Product);
  }
}
