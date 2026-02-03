import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

app.listen(3000, () =>
  console.log("RBAC engine running on port 3000")
);
