import User from "../models/userModel.js";

export const createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

export const getAllUsers = async () => {
  return await User.find();
};
