import * as userService from "../services/userService.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    successResponse(res, "User created successfully", user);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    successResponse(res, "Fetched users successfully", users);
  } catch (error) {
    errorResponse(res, error.message);
  }
};
