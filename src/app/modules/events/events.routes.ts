import express from 'express'
import { eventsController } from './events.controller'

const router = express.Router()

router.post("/create", eventsController.createEvents)
router.get("/", eventsController.getAllEvents)
router.get("/:id", eventsController.getEventsById)
router.put("/:id", eventsController.updateEventsById)
router.delete("/:id", eventsController.deleteEventsById)

export const eventsRoutes = router