import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());

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
