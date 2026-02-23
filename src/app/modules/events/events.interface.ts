import mongoose from "mongoose";


export interface IEvents {
  title: string;
  description: string;
  imgUrl: string;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}