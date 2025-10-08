import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined in .env");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
