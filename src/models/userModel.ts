import mongoose from "mongoose";

export interface CreateUserDto {
  name: string;
  email: string;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
