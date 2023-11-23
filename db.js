import mongoose from 'mongoose';
import config from './config.js';
import dotenv from 'dotenv';

dotenv.config();
const DB_ATLAS_PASSWORD = process.env.DB_ATLAS_PASSWORD;

const connect = async () => {
  try {
    //let localUrl = config.MONGO_URL;
    let dataBaseUrl = `mongodb+srv://laiaguirado:${DB_ATLAS_PASSWORD}@cluster0.rtlkk76.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(dataBaseUrl);
    console.log("Mongoose connected");
  } catch (e) {
    console.error(`Could not connect to MongoDB: ${e}`);
  }
}

const disconnect = async () => {
  return mongoose.connection.close();
}

export default { connect, disconnect }