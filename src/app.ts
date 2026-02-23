import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { infoRoutes } from "./app/modules/info/info.routes";
import { newsRoutes } from "./app/modules/news/news.routes";
import { siteSettingsRoutes } from "./app/modules/settings/siteSettings.routes";
import { shopRoutes } from "./app/modules/shop/shop.routes";
import { userRoutes } from "./app/modules/user/user.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());


// Importing API routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/shop", shopRoutes);
app.use("/api/v1/news", newsRoutes)
app.use("/api/v1/info", infoRoutes)
app.use("/api/v1/settings", siteSettingsRoutes)


app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "The server is on health" });
});

//error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

//Not Found
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

export default app;
