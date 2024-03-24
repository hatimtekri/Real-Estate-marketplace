import { ApiError } from "./ApiError.js";

export const asyncErrorHandler = (routeHandler) => async (req, res, next) => {
  try {
    await routeHandler(req, res, next);
  } catch (error) {
    if (error.code === 11000) {
      // Handle the duplicate key error
      res.status(400).json({
        message: "Duplicate key error. This record already exists.",
      });
    } else {
      //   // Handle other errors
      try {
        res.status(error.code || 500).json({
          message: error.message,
        });
      } catch (e) {
        next(error);
      }
    }
  }
};
