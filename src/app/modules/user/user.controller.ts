import { Request, Response } from "express";
import { userService } from "./user.service";


const createUser = async (req: Request, res: Response) => {
  try {
    // Logic to create a user
    const {user} = req.body;
    const result = await userService.createUser(user);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message:"Something went wrong", error });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({message: "Users fetched successfully", data: users});
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
}

export const userController = {
  createUser,
  getAllUsers,
}