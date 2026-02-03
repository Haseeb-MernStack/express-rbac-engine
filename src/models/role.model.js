import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: String,
  permissions: [String]
});

export default mongoose.model("Role", roleSchema);
