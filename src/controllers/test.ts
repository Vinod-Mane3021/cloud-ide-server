import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/api-response";
import { HttpStatus, HttpStatusCode } from "../constants/http-status";
import { asyncHandler } from "../utils/async-handler";
import { db } from "../config/prisma-client";

export const getApi = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    

    return new ApiResponse(res, {
      statusCode: HttpStatusCode.OK,
      status: HttpStatus.SUCCESS,
      message: "data found",
      data: {
        name: "vinod"
      },
    });
  }
);
