import express from 'express';
import { getTestData } from '../controllers/Test.controllers.js';
const router = express.Router();


router.route("/").get(getTestData)

export default router
