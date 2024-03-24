import express from "express";
import { getTestData } from "../controllers/Test.controllers.js";
import { getTestUserData } from "../controllers/user.controllers.js";
const router = express.Router();


router.route('/test').get(getTestUserData)
export default router