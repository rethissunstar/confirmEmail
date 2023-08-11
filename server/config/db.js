// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/user_app", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// export default db;
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/user-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
