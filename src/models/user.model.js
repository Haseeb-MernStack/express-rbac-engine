import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }
});

export default mongoose.model("User", userSchema);
