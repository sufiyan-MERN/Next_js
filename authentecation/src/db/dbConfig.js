import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection failed please check this error", err);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong while connecting to dataBase");
  }
}
