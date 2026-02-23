import { Request, Response } from "express";
import { eventsService } from "./events.service";


const createEvents = async (req: Request, res: Response) => {

  try {

    const { event } = req.body

    const result = await eventsService.createEventsIntoDB(event);

    res.status(201).json({
      success: true,
      message: "Events successfully created",
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

const getAllEvents = async (req: Request, res: Response) => {

  try {

    const result = await eventsService.getAllEventsFromDB();
    res.status(200).json({
      success: true,
      message: "Events fetched successfully",
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

const getEventsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const events = await eventsService.getEventsByIdFromDB(id)

    res.status(200).json({
      success: true,
      message: "Events fetched successfully",
      data: events
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
}

const updateEventsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params
    const { event } = req.body
    const result = await eventsService.updateEventsByIdFromDB(id, event)

    res.status(200).json({
      success: true,
      message: "Events updated successfully",
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

const deleteEventsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const events = await eventsService.deleteEventsByIdFromDB(id)
    res.status(200).json({
      success: true,
      message: "Events deleted successfully",
      data: events
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
}


export const eventsController = {
  createEvents,
  getAllEvents,
  getEventsById,
  updateEventsById,
  deleteEventsById
}
