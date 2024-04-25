import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncErrorHandler } from "../utils/asyncErrorHandler.js";

export const getTestUserData = asyncErrorHandler((req, res) => {
  res.json({
    message: "Hello World",
  });
});

export const updateUser = asyncErrorHandler(async (req, res) => {
  if (req.tokenUser.id !== req.params.id) {
    throw new ApiError(401, "you can only update your own account");
  }

  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.json(rest);
  } catch (e) {}
});
