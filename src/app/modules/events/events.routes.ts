import express from 'express'
import authMiddleware from '../../middleware/auth.middleware'
import { eventsController } from './events.controller'

const router = express.Router()

router.post("/create", authMiddleware, eventsController.createEvents)
router.get("/", eventsController.getAllEvents)
router.get("/:id", eventsController.getEventsById)
router.put("/:id", authMiddleware, eventsController.updateEventsById)
router.delete("/:id", authMiddleware, eventsController.deleteEventsById)

export const eventsRoutes = router