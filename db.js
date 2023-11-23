import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DB_ATLAS_PASSWORD = process.env.DB_ATLAS_PASSWORD;
const DB_LOCAL_PASSWORD = process.env.DB_LOCAL_PASSWORD;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;

const connect = async () => {
  try {
    //let dataBaseUrl = `mongodb://${DB_USER}:${DB_LOCAL_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`;
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