import { IProduct } from "@/features/products";
import { AuthService } from "../auth/auth.client.service";
import { AuthError } from "../common";
import CartModel from "./cart.model";
export default class CartClientService {
  private _client: CartModel;
  private _auth: AuthService;

  constructor(client: CartModel, auth: AuthService) {
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
    const uid = this.getUserId();
    return this._client.findAll({ uid });
  }

  async addCart(product: IProduct) {
    const uid = this.getUserId();
    return this._client.add({ uid, product });
  }

  async deleteCart(productId: string) {
    const uid = this.getUserId();
    return this._client.delete({ uid, productId });
  }
}
