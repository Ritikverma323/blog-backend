import User, { CreateUserDto } from "../models/userModel";

export const createUser = async (data: CreateUserDto) => {
  const user = await User.create(data);
  return user;
};

export const getAllUsers = async () => {
  return await User.find();
};
