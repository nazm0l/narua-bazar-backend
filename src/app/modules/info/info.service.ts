import { IInfo } from "./info.interface"
import infoModel from "./info.model"

const getAllInfoFromDB = async (): Promise<IInfo[]> => {
  const news = await infoModel.find()

  return news
}

const updateInfoByIdFromDB = async (id: string, data: Partial<IInfo>): Promise<IInfo | null> => {
  const news = await infoModel.findByIdAndUpdate(id, data)

  return news
}

export const infoService = {
  getAllInfoFromDB,
  updateInfoByIdFromDB
}