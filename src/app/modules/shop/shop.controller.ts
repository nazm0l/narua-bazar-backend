import { Request, Response } from "express";
import { shopService } from "./shop.service";


const createShop = async (req: Request, res: Response) => {
  try {
    const shopData = req.body;

    const result = await shopService.createShopIntoDB(shopData);
    res.status(201).json({ success: true, message: "Shop created successfully", data: result });

  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong", error: error instanceof Error ? error.message : "Unknown error" });
  }
};

const getAllShops = async (req: Request, res: Response) => {
  try {
    const shops = await shopService.getAllShopsFromDB(req.query);
    res.status(200).json({
      success: true,
      message: "Shops fetched successfully",
      data: shops
    })


  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
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

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }

}

const updateShopById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params
    const shopData = req.body

    const updatedShop = await shopService.updateShopByIdFromDB(id, shopData)

    res.status(200).json({
      success: true,
      message: "Shop updated successfully",
      data: updatedShop
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

const deleteShopById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const deletedItem = await shopService.deleteShopByIdFromDB(id)

    res.status(200).json({
      success: true,
      message: "Shop deleted successfully",
      data: deletedItem
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
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
