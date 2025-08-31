import express from 'express'
import { infoController } from './info.controller'

const router = express.Router()

router.get("/", infoController.getAllInfo)
router.put("/:id", infoController.updateInfo)

export const infoRoutes = router