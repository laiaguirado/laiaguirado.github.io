import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './db.js'
import dotenv from 'dotenv';
import trivialControllers from "./trivial/trivial.controllers.js";

dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


trivialControllers.addRoutesTo(app);

const start = async () => {
    await db.connect();
    app.listen(SERVER_PORT, () => {
        const mode = "development".toUpperCase();
        console.log(`Trivial API Server (mode ${mode}) listening on port :8080`);
    });
};

start();