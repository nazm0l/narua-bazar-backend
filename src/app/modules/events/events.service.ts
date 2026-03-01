import { IEvents } from "./events.interface";
import eventsModel from "./events.model";



const createEventsIntoDB = async (data: IEvents): Promise<IEvents | null> => {
  const result = await eventsModel.create(data);

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
