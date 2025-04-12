import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import weatherRoute from "./routes/weather.js";

dotenv.config();

const port = process.env.port || 3522;
const app = express();

app.use(cors());

app.use("/weather", weatherRoute);

app.listen(port, () => {
    console.log("App Listening at port", port);
});