import { IEvents } from "./events.interface";
import newsModel from "./events.model";



const createNewsIntoDB = async (data: INews): Promise<INews | null> => {
  const result = await newsModel.create(data);

  return result
}

const getAllEventsFromDB = async (): Promise<IEvents[]> => {
  const events = await eventsModel.find()

  return events
}

const getEventsByIdFromDB = async (id: string): Promise<IEvents | null> => {
  const events = await eventsModel.findById(id)
  return events
}

const updateEventsByIdFromDB = async (id: string, data: Partial<IEvents>): Promise<IEvents | null> => {
  const events = await eventsModel.findByIdAndUpdate(id, data)

  return events
}

const deleteEventsByIdFromDB = async (id: string): Promise<IEvents | null> => {
  const events = await eventsModel.findByIdAndDelete(id);

  if (!events) {
    throw new Error("Events not found");
  }

  return events
}


export const eventsService = {
  createEventsIntoDB,
  getAllEventsFromDB,
  getEventsByIdFromDB,
  updateEventsByIdFromDB,
  deleteEventsByIdFromDB
} 
