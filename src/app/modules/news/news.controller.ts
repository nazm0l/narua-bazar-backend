import { Request, Response } from "express";
import { newsService } from "./news.service";


const createNews = async (req: Request, res: Response) => {

  try {

    const { news } = req.body

    const result = await newsService.createNewsIntoDB(news);

    res.status(201).json({
      success: true,
      message: "News successfully created",
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

const getAllNews = async (req: Request, res: Response) => {

  try {

    const result = await newsService.getAllNewsFromDB();

    res.status(200).json({
      success: true,
      message: "News fetched successfully",
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

const getNewsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const news = await newsService.getNewsByIdFromDB(id)

    res.status(200).json({
      success: true,
      message: "News fetched successfully",
      data: news
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
}

const updateNewsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params
    const { news } = req.body

    const result = await newsService.updateNewsByIdFromDB(id, news)

    res.status(200).json({
      success: true,
      message: "News updated successfully",
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

const deleteNewsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const news = await newsService.deleteNewsByIdFromDB(id)

    res.status(200).json({
      success: true,
      message: "News deleted successfully",
      data: news
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
}


export const newsController = {
  createNews,
  getAllNews,
  getNewsById,
  updateNewsById,
  deleteNewsById
}