import { asyncErrorHandler } from "../utils/asyncErrorHandler.js";

export const getTestUserData = asyncErrorHandler((req,res)=>{
    res.json({
        message:"Hello World"
    })
})