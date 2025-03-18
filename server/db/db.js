import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todo");
    console.log("SUCCESSFULLY CONNECTED TO THE DB");
  } catch (error) {
    process.exit(1);

    throw new Error(error);
  }
};

export default connectToDB;
