import mongoose from "mongoose";

const conncetToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Couldn't connect to MongoDB");
  }
};

export default conncetToDB;
