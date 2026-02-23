import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

let server: Server;

async function main() {
  try {

    // Connect to the database
    await mongoose.connect(config.database_url as string);
    console.log("Database connected successfully");

    server = app.listen(config.port, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.log("Failed to connect database",error);
  }
}

main();

process.on("unhandledRejection", (err: any) => {
  console.log("unhandledRejection", err.name, err.message);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", (err: any) => {
  console.log("uncaughtException is detected, shutting down the server...");
  process.exit(1);
});
