
import { Types } from "mongoose";

export interface IUser {
  _id?: Types.ObjectId | string;
  id?: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  role: "superadmin" | "admin" | "contributor";
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

