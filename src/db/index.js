import mongoose from "mongoose";

import { DB_NAME } from "../constents.js";

const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export default dbConnect;
