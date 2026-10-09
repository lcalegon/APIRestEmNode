import express from "express";
import connectOnDB from "./config/dbConnect.js";
import routes from "./routes/index.js"


const connection = await connectOnDB();

connection.on("error", (err) => {
  console.error("Connection Error", err);
});

connection.once("open", () => {
    console.log("Connection Data Base Successfully");
})

const app = express();
routes(app);

export default app; 