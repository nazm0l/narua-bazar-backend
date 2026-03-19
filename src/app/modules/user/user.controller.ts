import { Request, Response } from "express";
import { signToken } from "../../utils/jwt.util";
import { userService } from "./user.service";


const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    const result = await userService.createUserIntoDB(user);
    // don't return password
    const safeUser = {
      id: result?._id?.toString(),
      name: result?.name,
      email: result?.email,
      role: result?.role,
      isActive: result?.isActive,
      createdAt: result?.createdAt,
      updatedAt: result?.updatedAt,
    };
    res.status(201).json({ message: "User created successfully", data: safeUser });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error instanceof Error ? error.message : "Unknown error" });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUserFromDB(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // sign JWT
    const token = signToken({ id: user._id?.toString() || "", role: user.role });

    const safeUser = {
      id: user._id?.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      lastLogin: user.lastLogin,
    };

    res.status(200).json({ message: "Login successful", data: { user: safeUser, token } });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error instanceof Error ? error.message : "Unknown error" });
  }
}


const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsersFromDB();
    res.status(200).json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
}

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserByIdFromDB(id);
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

    const updatedUser = await userService.updateUserByIdFromDB(id, req.body);

    res.status(200).json({ message: "User updated successfully", data: updatedUser });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error })
  }
}


export const userController = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUserById
}
