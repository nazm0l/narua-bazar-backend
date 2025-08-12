import { Request, Response } from "express";
import { userService } from "./user.service";


const createUser = async (req: Request, res: Response) => {
  try {
    const {user} = req.body;

    const result = await userService.createUser(user);
    res.status(201).json({ message: "User created successfully", data: result });

  } catch (error: any) {
    res.status(500).json({ message:"Something went wrong", error: error.message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUser(email, password);
    
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", data: user });

  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
}


const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({message: "Users fetched successfully", data: users});
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
}

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User fetched successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
}

const updateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { user } = req.body;
    if (!id || !user) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const updatedUser = await userService.updateUserById(id, req.body);

    res.status(200).json({message: "User updated successfully", data: updatedUser});

  } catch (error) {
    res.status(500).json({message: "Something went wrong", error})
  }
}


export const userController = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUserById
}