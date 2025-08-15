import mongoose, { Schema } from "mongoose";
import { IShop } from "./shop.interface";


const ShopSchema: Schema<IShop> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String },
  ownerName: { type: String, required: true },
  imageUrl: { type: String, default: "" },
  website: { type: String, default: "" },
  isOpen: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const shopModel = mongoose.model<IShop>("Shop", ShopSchema);

export default shopModel;