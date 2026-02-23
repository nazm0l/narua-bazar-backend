import express from 'express'
import { newsController } from './news.controller'

const router = express.Router()

router.post("/create", newsController.createNews)
router.get("/", newsController.getAllNews)
router.get("/:id", newsController.getNewsById)
router.put("/:id", newsController.updateNewsById)
router.delete("/:id", newsController.deleteNewsById)

export const newsRoutes = router