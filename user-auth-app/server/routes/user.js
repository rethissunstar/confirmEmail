import express from "express";
import User from "../models/User.js";

const router = express.Router();

 
  router.get("/:email", async (req, res) => {
    const userEmail = req.params.email;
  
    try {
      const user = await User.findOne({ eMail: userEmail });
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  router.post("/", async (req, res) => {
    try {
      const newUser = new User(req.body);            
      if (newUser.addressValidation) {      
        await newUser.save();
        res.status(201).json(newUser);
      } else {
            res.status(400).json({ message: "Address validation failed" });
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
     }
  });

export default router;
