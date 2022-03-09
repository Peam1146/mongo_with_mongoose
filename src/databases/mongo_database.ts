import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbUrl = process.env.DATABASE_URL || "";
    await mongoose.connect(dbUrl);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
