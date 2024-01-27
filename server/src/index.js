import { config } from "dotenv";
config({
  path: "./env",
});
import connectDB from "./db/mongodbconnection.js";
import {app} from './app.js';

connectDB().then(()=>{
  
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
}).catch((error)=>{
  console.log("Database connection Failed")
})
