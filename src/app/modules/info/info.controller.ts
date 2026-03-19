import { Request, Response } from "express";
import { infoService } from "./info.service";


const getAllInfo = async (req: Request, res: Response) => {

  try {

    const result = await infoService.getAllInfoFromDB();

    res.status(200).json({
      success: true,
      message: "Info fetched successfully",
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

const updateInfo = async (req: Request, res: Response) => {
  try {

    const { id } = req.params
    const { info } = req.body

    const result = await infoService.updateInfoByIdFromDB(id, info)

    res.status(200).json({
      success: true,
      message: "Info updated successfully",
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

export const infoController = {
  getAllInfo,
  updateInfo,
}
