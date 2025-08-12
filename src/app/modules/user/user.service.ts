import { IUser } from "./user.interface";
import userModel from "./user.model";


const createUser = async (userData:IUser): Promise<IUser | null> => {
  const user = await userModel.create(userData);

  if (!user) {
    throw new Error("User creation failed");
  }

  return user;
};

const getAllUsers = async (): Promise<IUser[]> => {
  const users = await userModel.find();
  return users;
}


export const userService = {
  createUser,
  getAllUsers,
};
