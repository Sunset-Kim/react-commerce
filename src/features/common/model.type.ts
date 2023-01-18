export interface ServiceModel {
  findAll?: (args: any) => Promise<unknown>;
  add?: (args: any) => Promise<unknown>;
  delete?: (args: any) => Promise<unknown>;
  update?: (args: any) => Promise<unknown>;
  find?: (args: any) => Promise<unknown>;
}
