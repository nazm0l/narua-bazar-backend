import express from 'express'
import authMiddleware from '../../middleware/auth.middleware'
import { newsController } from './news.controller'

const router = express.Router()

router.post("/create", newsController.createNews)
// router.post("/create", authMiddleware, newsController.createNews)
router.get("/", newsController.getAllNews)
router.get("/:id", newsController.getNewsById)
router.put("/:id", authMiddleware, newsController.updateNewsById)
router.delete("/:id", authMiddleware, newsController.deleteNewsById)

export const newsRoutes = router