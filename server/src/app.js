import express from "express";
import TestRoute from "./routes/Test.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware.js";
import path from 'path';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
const app = express();


// cors setting
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// pre-defined middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Disabling API Cache
app.set("etag", false);
app.set("trust proxy", true);


// routes 
app.use("/test-route", TestRoute); 
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)

// global error handling
app.use(errorHandler)

export { app };
