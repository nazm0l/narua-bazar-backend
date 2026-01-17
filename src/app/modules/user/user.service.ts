import bycrypt from "bcrypt";
import config from "../../config";
import { IUser } from "./user.interface";
import userModel from "./user.model";


const createUserIntoDB = async (userData: IUser): Promise<IUser | null> => {

  const hashedPassword = bycrypt.hashSync(userData.password, Number(config.saltRounds));
  userData.password = hashedPassword;

  const user = await userModel.create(userData);

  if (!user) {
    throw new Error("User creation failed");
  }

  return user;
};

const loginUserFromDB = async (email: string, password: string) => {

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = bycrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  user.lastLogin = new Date();
  await user.save();

  return user;
}

const getAllUsersFromDB = async (): Promise<IUser[]> => {
  const users = await userModel.find();
  return users;
}

const getUserByIdFromDB = async (id: string): Promise<IUser | null> => {
  const user = await userModel.findById(id);
  return user;
}

const updateUserByIdFromDB = async (id: string, userData: Partial<IUser>): Promise<IUser | null> => {
  const user = await userModel.findByIdAndUpdate(id, userData, { new: true });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

export const userService = {
  createUserIntoDB,
  loginUserFromDB,
  getAllUsersFromDB,
  getUserByIdFromDB,
  updateUserByIdFromDB
};
