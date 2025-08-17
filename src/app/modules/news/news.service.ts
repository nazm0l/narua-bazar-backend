import { INews } from "./news.interface";
import newsModel from "./news.model";



const createNewsIntoDB = async (data: INews): Promise<INews | null> => {
  const result = await newsModel.create(data);

  return result
}

const getAllNewsFromDB = async (): Promise<INews[]> => {
  const news = await newsModel.find()

  return news
}

const getNewsByIdFromDB = async (id: string): Promise<INews | null> => {
  const news = await newsModel.findById(id)

  return news
}

const updateNewsByIdFromDB = async (id: string, data: Partial<INews>): Promise<INews | null> => {
  const news = await newsModel.findByIdAndUpdate(id, data)

  return news
}

const deleteNewsByIdFromDB = async (id: string): Promise<INews | null> => {
  const news = await newsModel.findByIdAndDelete(id);

  if (!news) {
    throw new Error("News not found");
  }

  return news
}


export const newsService = {
  createNewsIntoDB,
  getAllNewsFromDB,
  getNewsByIdFromDB,
  updateNewsByIdFromDB,
  deleteNewsByIdFromDB
}