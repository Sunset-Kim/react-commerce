import { IProduct } from "@/features/products";
import { AuthModel } from "../auth/auth.model";
import CartModel from "./cart.model";
export class AuthError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

export default class CartClientService {
  private _client: CartModel;
  private _auth: AuthModel;

  constructor(client: CartModel, auth: AuthModel) {
    this._client = client;
    this._auth = auth;
  }

  private getUserId() {
    if (this._auth.user === null) {
      throw new AuthError("유저가 없습니다");
    }
    return this._auth.user.uid;
  }

  async getCart() {
    const id = this.getUserId();
    return this._client.findAll({ id });
  }

  async addCart(product: IProduct) {
    const id = this.getUserId();
    return this._client.add({ id, product });
  }

  async deleteCart(productId: string) {
    const id = this.getUserId();
    return this._client.delete({ id, productId });
  }
}
