import { User } from "../models/user.model.js";
import { asyncErrorHandler } from "../utils/asyncErrorHandler.js";
import bcrypt from 'bcryptjs'

export const signup = asyncErrorHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password,10)
  const newUser = new User({ username, email, password:hashedPassword });
  await newUser.save()
  console.log(username,email,password);
  res.status(201).json("User created successfully");
});
