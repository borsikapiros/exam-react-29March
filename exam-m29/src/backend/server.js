const express = require("express");
const app = express();
const PORT = 8000;
const gardendata = require("./data/gardendata.json");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/api/gardendata", (req, res) => {
    res.send(JSON.stringify(gardendata));
});

app.listen(PORT, () => {
    console.log("The app is listening at the following port:", PORT);
});