import express from "express";
import TestRoute from "./routes/Test.route.js";
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())


app.get("/test", (req, res) => {
    res.send("Hello World");
  });
  
  app.use("/test-route", TestRoute);


export { app };
