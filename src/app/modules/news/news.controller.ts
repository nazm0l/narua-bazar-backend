import { Request, Response } from "express";
import userModel from "../user/user.model";
import { INews } from "./news.interface";
import { newsService } from "./news.service";


const createNews = async (req: Request, res: Response) => {

  try {

    const { title, description, imgUrl } = req.body;
    let createdBy = req.user?.id;

    if (!createdBy) {
      const user = await userModel.findOne();
      if (user) {
        createdBy = user._id.toString();
      }
    }

    if (!createdBy) {
      return res.status(400).json({
        success: false,
        message: "User not found to associate with news",
      });
    }

    const newsData = { title, description, imgUrl, createdBy } as INews;
    const result = await newsService.createNewsIntoDB(newsData);

    res.status(201).json({
      success: true,
      message: "News successfully created",
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

const getAllNews = async (req: Request, res: Response) => {

  try {

    const result = await newsService.getAllNewsFromDB();

    res.status(200).json({
      success: true,
      message: "News fetched successfully",
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

const getNewsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const news = await newsService.getNewsByIdFromDB(id)

    res.status(200).json({
      success: true,
      message: "News fetched successfully",
      data: news
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

const updateNewsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params
    const data = req.body

    const result = await newsService.updateNewsByIdFromDB(id, data)

    res.status(200).json({
      success: true,
      message: "News updated successfully",
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

const deleteNewsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const news = await newsService.deleteNewsByIdFromDB(id)

    res.status(200).json({
      success: true,
      message: "News deleted successfully",
      data: news
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
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
