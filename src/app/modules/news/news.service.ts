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



export const newsService = {
  createNewsIntoDB,
  getAllNewsFromDB
}