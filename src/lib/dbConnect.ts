import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(
      process.env.MONGODB_URI! + process.env.DB_NAME! || "",
      {}
    );
    console.log("db is : ", db);

    connection.isConnected = db.connections[0].readyState;

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

export default dbConnect;
