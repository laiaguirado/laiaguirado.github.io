const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");
const db = require("./db");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", express.static("../../frontend / dist"));

require('./trivial/trivial.controllers').addRoutesTo(app);

const start = async () => {
    await db.connect();
    app.listen("8080", () => {
        const mode = "development".toUpperCase();
        console.log(`Trivial API Server (mode ${mode}) listening on port :8080`);
    });
};

start();