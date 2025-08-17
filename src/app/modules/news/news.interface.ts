import mongoose from "mongoose";


export interface INews {
  title: string;
  description: string;
  imgUrl: string;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}