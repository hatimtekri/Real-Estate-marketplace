import { faker } from "@faker-js/faker";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import { User } from "../models/user.model.js";

const createUser = async (numUsers) => {
  try {
    const usersPromise = [];

    for (let i = 0; i < numUsers; i++) {
      const tempUser = User.create({
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: bcrypt.hashSync("password", 10),
      });
      usersPromise.push(tempUser);
    }

    await Promise.all(usersPromise);

    console.log("Users created", numUsers);
    process.exit(1);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export { createUser };
