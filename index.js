import express from "express";
import db from "./config/db.js";
import userRoutes from "./routes/user.js"; 

const app = express();

// Middleware
app.use(express.json());

// Use API routes
app.use("/", userRoutes); 

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
