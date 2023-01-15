export class ServiceError extends Error {
  message: string;
  type: string;

  constructor({ type, message }: { type: string; message: string }) {
    super();
    this.message = message;
    this.type = type;
  }
}
