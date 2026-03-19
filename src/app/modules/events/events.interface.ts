import mongoose from "mongoose";


export interface IEvents {
  title: string;
  description: string;
  imgUrl: string;
  date: string;
  time: string;
  location: string;
  createdBy: mongoose.Types.ObjectId | string;
  createdAt?: Date;
  updatedAt?: Date;
}