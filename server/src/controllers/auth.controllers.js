import { User } from "../models/user.model.js";
import { asyncErrorHandler } from "../utils/asyncErrorHandler.js";
import bcrypt from "bcryptjs";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { json } from "express";

export const signup = asyncErrorHandler(async (req, res) => {
  console.log("signup route");
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  console.log(username, email, password);
  res.status(201).json("User created successfully");
});

export const signin = asyncErrorHandler(async (req, res) => {
  const { email, password } = req.body;
  const validUser = await User.findOne({ email: email });

  if (!validUser) {
    throw new ApiError(400, "Invalid credentails");
  }
  const validPassword = bcrypt.compareSync(password, validUser.password);

  if (!validPassword) {
    throw new ApiError(401, "invalid password");
  }
  const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

  // res.cookie("access_token",token,{httpOnly:true}).status(200).json(validUser)

  res.status(200).json({ ...validUser._doc, token: token });
});
