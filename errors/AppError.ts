import { ErrorCode } from "./ErrorCodes";

export class AppError extends Error {
  public readonly code: ErrorCode;

  constructor(code: ErrorCode, message: string) {
    super(message);

    this.name = "AppError";
    this.code = code;

    // Necessário para instanceof funcionar corretamente
    Object.setPrototypeOf(this, AppError.prototype);
  }
}