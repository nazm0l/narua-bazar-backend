import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";


const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  role: {
    type: String,
    enum: ["superadmin", "admin", "contributor"],
    default: "contributor",
  },
  lastLogin: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const userModel = mongoose.model<IUser>("User", UserSchema);

export default userModel;