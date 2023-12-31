
// import { SwitchModel, Keyboard, Keycap, User, Deskmat, Accessory } from "../models/index.js"; // Import all models
// import switchData from "./switchData.json" assert { type: "json" };
// import keyboardData from "./keyboardData.json" assert { type: "json" };
// import keycapsData from "./keycapsData.json" assert { type: "json" };
// import deskmatData from "./deskmatData.json" assert { type: "json" };
// import accessoryData from "./accessoryData.json" assert { type: "json" };
// import userData from "./userData.json" assert { type: "json" };
// import bcrypt from "bcrypt";
import mongoose from "mongoose";
import db from "../config/db.js";
import { User } from "../../models/index.js";
import userData from "./userData.json" assert {type: "json"};
import bcrypt from "bcrypt";


db.once("open", async () => {
  try {
    await Promise.all([
      // SwitchModel.deleteMany({}),
      // Keyboard.deleteMany({}),
      // Keycap.deleteMany({}),
      // Deskmat.deleteMany({}),
      // Accessory.deleteMany({}),
      User.deleteMany({}),
    ]);

    const hashedUserData = await Promise.all(
      userData.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        const partialCreditCard = user.creditCard.substring(0, 12);
        const hashedPartialCreditCard = await bcrypt.hash(partialCreditCard, salt);
        const asterisks = "*".repeat(12);
        const hashedCreditCard = `${asterisks}${user.creditCard.substring(12)}`;

        return {
          ...user,
          password: hashedPassword,
          creditCard: hashedCreditCard,
        };
      }),
    );

    await Promise.all([
      // SwitchModel.insertMany(switchData),
      // Keyboard.insertMany(keyboardData),
      // Keycap.insertMany(keycapsData),
      // Deskmat.insertMany(deskmatData),
      // Accessory.insertMany(accessoryData),
      User.insertMany(hashedUserData),
    ]);

    console.log("Database seeded 🌱");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit(0);
  }
});
