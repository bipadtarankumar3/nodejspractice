// require("dotenv").config({path: "./env"});
import dotenv from "dotenv"
import { app } from "./app.js";
import dbConnect from "./db/index.js";
dotenv.config({path: "./env"});

app.on("error", (error) => {
    console.error("Error:", error);
    throw error;
});

( async () => {
    try {
        await dbConnect().then(
            app.listen(process.env.PORT, () => {
                console.log(`Server running on port ${process.env.PORT}`);
            })
        ).catch((error) => {
            console.error("Error:", error);
        });
    } catch (error) {
        console.error("Error:", error);
    }
})()