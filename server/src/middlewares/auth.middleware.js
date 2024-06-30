import JWT from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

export const loginMiddleware = (req, res, next) => {
  console.log("middlware");
  try {
    const token = req.headers.token;
console.log("token - ",req.headers)
    JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) throw new ApiError(err);
      req.tokenUser = user;
      return next();
    });
  } catch (e) {
    return next(e);
  }
};
