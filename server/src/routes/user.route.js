import express from "express";
import { getTestData } from "../controllers/Test.controllers.js";
import {
  getTestUserData,
  updateUser,
} from "../controllers/user.controllers.js";
import { loginMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/test").get(loginMiddleware, getTestUserData);
router.route("/update/:id").post(loginMiddleware, updateUser);
export default router;
