import { Schema, model } from "mongoose";

interface User {
  id: number;
  name: string;
  email: string;
}

const userSchema = new Schema<User>({
  id: Number,
  name: String,
  email: String,
});

const UserModel = model("User", userSchema);

export { UserModel, User };
