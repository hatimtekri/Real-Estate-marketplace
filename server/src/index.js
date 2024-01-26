import { config } from "dotenv";
config({
  path: "./env",
});
import express from "express";
import connectDB from "./db/dbconnection.js";
import TestRoute from "./routes/Test.route.js";

const app = express();

connectDB();

app.get("/test", (req, res) => {
  res.send("Hello World");
});

app.use("/test-route", TestRoute);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
