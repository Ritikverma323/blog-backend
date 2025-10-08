import { Response } from "express";

export const successResponse = (
  res: Response,
  message: string,
  data: any = null
): Response => {
  return res.status(200).json({ success: true, message, data });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number = 400
): Response => {
  return res.status(statusCode).json({ success: false, message });
};
