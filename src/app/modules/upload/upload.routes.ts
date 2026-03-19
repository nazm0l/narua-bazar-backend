import express from "express";
import multer from "multer";
import { uploadController } from "./upload.controller";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/image", upload.single("file"), uploadController.uploadImage);

export const uploadRoutes = router;
