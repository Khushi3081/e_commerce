import { Response } from "express";

export const DEFAULT_ENVIRONMENT = "development"

export const generalResponse = (
    response: Response,
    data: any = null,
    message: string | {} = '',
    responseType = 'success',
    toast = false,
    statusCode = 200,
  ) => {
    response.status(statusCode).send({
      data,
      message,
      toast,
      responseType,
    });
  };