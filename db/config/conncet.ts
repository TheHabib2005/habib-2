import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("db connection established");
  } catch (error) {
    console.log("Something goes wrong!");
    process.exit(1);
  }
}
