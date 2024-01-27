import mongoose from "mongoose";
import { DB_Name } from "../constant.js";
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
  } catch (error) {
    console.log("Database connection Failed - ", error);
    throw error;
  }
};

export default connectDB;
