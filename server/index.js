const app = require("./app");
const express = require("express");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const { connect } = require("./config/db");
const path = require("path");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//CONFIG
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "server/.env" });
// }
dotenv.config({ path: "server/.env" });
const PORT = process.env.PORT || 5000;

connect();

// const __dirname = path.resolve();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
