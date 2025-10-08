import { Request, Response } from "express";
import * as userService from "../services/userService";
import { successResponse, errorResponse } from "../utils/response";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    successResponse(res, "User created successfully", user);
  } catch (error: any) {
    errorResponse(res, error.message);
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    successResponse(res, "Fetched users successfully", users);
  } catch (error: any) {
    errorResponse(res, error.message);
  }
};
