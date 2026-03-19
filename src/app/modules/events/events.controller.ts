import { Request, Response } from "express";
import userModel from "../user/user.model";
import { IEvents } from "./events.interface";
import { eventsService } from "./events.service";


const createEvents = async (req: Request, res: Response) => {

  try {

    const { title, description, imgUrl, date, time, location } = req.body
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
        message: "User not found to associate with event",
      });
    }

    const eventData = { title, description, imgUrl, date, time, location, createdBy } as IEvents;
    const result = await eventsService.createEventsIntoDB(eventData);

    res.status(201).json({
      success: true,
      message: "Events successfully created",
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

const getAllEvents = async (req: Request, res: Response) => {

  try {

    const result = await eventsService.getAllEventsFromDB();
    res.status(200).json({
      success: true,
      message: "Events fetched successfully",
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

const getEventsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const events = await eventsService.getEventsByIdFromDB(id)

    res.status(200).json({
      success: true,
      message: "Events fetched successfully",
      data: events
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

const updateEventsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params
    const data = req.body
    const result = await eventsService.updateEventsByIdFromDB(id, data)

    res.status(200).json({
      success: true,
      message: "Events updated successfully",
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

const deleteEventsById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const events = await eventsService.deleteEventsByIdFromDB(id)
    res.status(200).json({
      success: true,
      message: "Events deleted successfully",
      data: events
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
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
