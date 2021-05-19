import httpStatus from "http-status-codes";
import { MessagesHelper } from "../helpers/messages.helper";

export default class UnauthorizedException extends Error {
  protected statusCode: number;

  constructor(
    statusCode = httpStatus.UNAUTHORIZED,
    message: string = MessagesHelper.UNAUTHORIZED
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}
