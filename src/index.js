import logger from "./logger.js";
import express from "express";

const app = express();
const fileWriterInstence = logger();

app.post("/stop", (req, res) => {
    const abr = req.query.abr;
    fileWriterInstence.addLog(abr);
    res.send("add log success");
});

app.listen(3000);

