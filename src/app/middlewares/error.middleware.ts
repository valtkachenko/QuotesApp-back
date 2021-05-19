import { NextFunction, Request, Response } from "express";
import { ErrorHandlerType } from "../types/error.type";
import httpStatus from "http-status-codes";

class ErrorMiddleware {
  public use = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const statusCode = error.statusCode || httpStatus.BAD_REQUEST;

    return response.status(statusCode).json({
      status: httpStatus.getStatusText(statusCode),
      statusCode: statusCode,
      error: error.message,
    });
  };
}

export default new ErrorMiddleware();
