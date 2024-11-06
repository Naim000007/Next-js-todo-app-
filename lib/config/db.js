import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;  // Use environment variables for security

// Create a cache to avoid reconnecting to the database every time
let isConnected = false;

export const ConnectDB = async () => {
    if (isConnected) {
        console.log("Already connected to DB");
        return;
    }

    try {
        // Connect to MongoDB with the provided URI
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;  // Mark the connection as established
        console.log("DB connection established");
    } catch (error) {
        console.error("Error connecting to DB", error);
        throw new Error("Database connection failed");
    }
};
