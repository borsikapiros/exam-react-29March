//defining middlewares, port and data source:
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const gardendata = require("./data/gardendata.json");

//use express and cors:
app.use(express.json());

app.use(cors());

//if a request comes in to /api/gardendata, send the data source as response
app.get("/api/gardendata", (req, res) => {
    res.send(JSON.stringify(gardendata));
});

//log the info to the console if it's running:
app.listen(PORT, () => {
    console.log("The app is listening at the following port:", PORT);
});