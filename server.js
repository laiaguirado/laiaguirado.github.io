import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './db.js'
import trivialControllers from "./trivial/trivial.controllers.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


trivialControllers.addRoutesTo(app);


const start = async () => {
    await db.connect();
    app.listen(8080, () => {
        const mode = "development".toUpperCase();
        console.log(`Trivial API Server (mode ${mode}) listening on port :8080`);
    });
};

start();