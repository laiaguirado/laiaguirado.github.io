import mongoose from 'mongoose';
import config from './config.js';

const connect = async () => {
  try {
    //let localUrl = config.MONGO_URL;
    let dataBaseUrl = `mongodb+srv://laiaguirado:19221312@cluster0.rtlkk76.mongodb.net/?retryWrites=true&w=majority`;
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