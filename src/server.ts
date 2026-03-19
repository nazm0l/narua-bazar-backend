import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

let server: Server;

async function main() {
  try {

    // Connect to the database
    await mongoose.connect(config.database_url as string);
    console.log("Database connected successfully");

    server = app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

main();

process.on("unhandledRejection", (err: Error) => {
  console.log("unhandledRejection", err.name, err.message);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException is detected, shutting down the server...", err.message);
  process.exit(1);
});
