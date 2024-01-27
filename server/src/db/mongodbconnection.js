import mongoose from "mongoose";
import { MongoDB_Name } from "../constant.js";
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${MongoDB_Name}`);
  } catch (error) {
    console.log("Database connection Failed - ", error);
    throw error;
  }
};

export default connectDB;
