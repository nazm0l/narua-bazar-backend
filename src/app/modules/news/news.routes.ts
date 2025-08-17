import express from 'express'
import { newsController } from './news.controller'

const router = express.Router()

router.post("/create", newsController.createNews)
router.get("/", newsController.getAllNews)
router.get("/:id", newsController.getNewsById)
router.get("/:id", newsController.updateNewsById)
router.get("/:id", newsController.deleteNewsById)

export const newsRoutes = router