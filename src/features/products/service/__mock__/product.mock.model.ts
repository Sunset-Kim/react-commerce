import { IProduct } from "../../types";
import ProductsModel, { IProductModel } from "../product.model";

export class ProductMockModel implements IProductModel {
  constructor() {}

  async findAll({ category }: { category?: number }): Promise<IProduct[]> {
    return await fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => data as IProduct[]);
  }

  async find({ id }: { id: string }) {
    return await fetch("/data/product_1.json")
      .then((res) => res.json())
      .then((data) => data as IProduct);
  }

  async add(params: any) {}

  async update({
    id,
    product,
  }: {
    id: string;
    product: {
      price: number;
    };
  }) {}
}
