import express from 'express'
import { newsController } from './news.controller'

const router = express.Router()

router.post("/create", newsController.createNews)
router.get("/", newsController.getAllNews)

export const newsRoutes = router