import { IShop } from "./shop.interface";
import shopModel from "./shop.model";


const createShopIntoDB = async (shopData: IShop) => {

  const shop = await shopModel.create(shopData);

  if (!shop) {
    throw new Error("Shop creation failed");
  }

  return shop;
};

const getAllShopsFromDB = async (): Promise<IShop[]> => {
  const shops = await shopModel.find();
  return shops;
}

const getShopByIdFromDB = async (id: string): Promise<IShop | null> => {
  const shop = await shopModel.findById(id);
  return shop;
}

const updateShopByIdFromDB = async (id: string, shopData: Partial<IShop>): Promise<IShop | null> => {
  const shop = await shopModel.findByIdAndUpdate(id, shopData, { new: true });
  if (!shop) {
    throw new Error("Shop not found");
  }
  return shop;
}

const deleteShopByIdFromDB = async (id: string): Promise<IShop | null> => {
  const shop = await shopModel.findByIdAndDelete(id);
  if (!shop) {
    throw new Error("Shop not found");
  }
  return shop;
}

export const shopService = {
  createShopIntoDB,
  getAllShopsFromDB,
  getShopByIdFromDB,
  updateShopByIdFromDB,
  deleteShopByIdFromDB
};