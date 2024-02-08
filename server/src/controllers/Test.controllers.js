import { ApiError } from "../utils/ApiError.js";
import { asyncErrorHandler } from "../utils/asyncErrorHandler.js";

export const getTestData = asyncErrorHandler((req, res) => {
  //throw new ApiError()
  res.send("test routing working");
});
