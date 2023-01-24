import { AuthService } from "../auth/auth.client.service";
import { AuthError } from "../common";
import AddressModel from "./address.model";
import { Address, AddressResponse } from "./schema/address.schema";

export default class AddressClientService {
  private _client: AddressModel;
  private _auth: AuthService;

  constructor(client: AddressModel, auth: AuthService) {
    this._client = client;
    this._auth = auth;
  }

  private getUserId() {
    if (this._auth.user === null) {
      throw new AuthError("유저가 없습니다");
    }
    return this._auth.user.uid;
  }

  async getAddresses() {
    const uid = this.getUserId();
    return this._client.findAll({ uid });
  }

  async addAddress(address: Address) {
    const uid = this.getUserId();
    return this._client.add({ uid, address });
  }

  async updateAddress(newAddress: AddressResponse) {
    const uid = this.getUserId();
    const { id, ...address } = newAddress;

    return this._client.update({ uid, id, address });
  }

  async deleteAddress(id: string) {
    const uid = this.getUserId();

    return this._client.delete({ uid, id });
  }
}
