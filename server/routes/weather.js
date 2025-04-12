import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
    // console.log(req.query);
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ error: "Please enter a valid city"});
    }

    try {
        const apiKey = process.env.api_key;
        // console.log(apiKey);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const getData = await axios.get(url);
        const data = getData.data;
        // console.log(data);
        res.json(data);
    }
    catch (err) {
        // console.log(err);
        res.status(500).json({ error: "Could not fetch the weather data right now!!" });
    }
});

export default router;