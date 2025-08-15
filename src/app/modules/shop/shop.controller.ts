import { Request, Response } from "express";
import { shopService } from "./shop.service";


const createShop = async (req: Request, res: Response) => {
  try {
    const { shop } = req.body;

    const result = await shopService.createShopIntoDB(shop);
    res.status(201).json({ message: "Shop created successfully", data: result });

  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const getAllShops = async (req: Request, res: Response) => {
  try {

    const shops = await shopService.getAllShopsFromDB();
    res.status(200).json({
      success: true,
      message: "Shops fetched successfully",
      data: shops
    })


  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
}


export const shopController = {
  createShop,
  getAllShops
}