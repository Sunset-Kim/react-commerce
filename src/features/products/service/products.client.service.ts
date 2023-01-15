import { ServiceError } from "@/features/errors";
import debug from "@/utils/debug";
import { Category } from "../types/products.type";
import ProductsModel, { IProductModel } from "./product.model";

const log = debug("products|client|service :");

export default class ProdcutsClientService {
  private model: IProductModel;
  constructor(model: IProductModel) {
    this.model = model;
  }

  async getProduct({ id }: { id: string }) {
    try {
      const res = await this.model.find({ id });
      log(res);
      return res;
    } catch (error) {
      log(error);
      throw new ServiceError({ type: "firebase", message: "sdf" });
    }
  }

  async getProducts(category?: Category) {
    try {
      const res = await this.model.findAll({ category });
      log(res);
      return res;
    } catch (error) {
      log(error);
      throw new ServiceError({ type: "firebase", message: "sdf" });
    }
  }

  addProduct() {}

  deleteProduct() {}

  buyProducts() {}
}
