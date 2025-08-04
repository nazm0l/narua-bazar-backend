import { Server } from "http";
import app from "./app";

let server: Server;

async function main() {
  try {
    server = app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.log(error);
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
