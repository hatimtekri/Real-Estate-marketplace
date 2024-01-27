import mongoose, { Schema } from "mongoose";

const testSchema = new Schema({})
export const Test =  mongoose.model("Test",testSchema)
