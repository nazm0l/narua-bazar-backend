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

const getShopById = async (req: Request, res: Response) => {

  try {

    const { id } = req.params

    const result = await shopService.getShopByIdFromDB(id)

    res.status(200).json({
      success: true,
      message: "Shop fetched successfully",
      data: result
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }

}

const updateShopById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params
    const { shop } = req.body

    const updatedShop = await shopService.updateShopByIdFromDB(id, shop)

    res.status(200).json({
      success: true,
      message: "Shop updated successfully",
      data: updatedShop
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
}

const deleteShopById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const deletedItem = shopService.deleteShopByIdFromDB(id)

    res.status(200).json({
      success: true,
      message: "Shop deleted successfully",
      data: deletedItem
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
  getAllShops,
  getShopById,
  updateShopById,
  deleteShopById
}
