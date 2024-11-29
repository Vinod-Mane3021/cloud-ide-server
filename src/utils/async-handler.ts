import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "./api-response";
import { HttpStatus, HttpStatusCode } from "../constants/http-status";


const asyncHandler = (fun: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fun(req, res, next);
    } catch (error: any) {
      return new ApiResponse(res, {
        statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
        status: HttpStatus.SERVER_ERROR,
        message: "Something went wrong, please try again later",
      });
    }
  };
};

export { asyncHandler };
