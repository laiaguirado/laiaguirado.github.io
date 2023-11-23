import mongoose from 'mongoose';
import config from "./config.js"


const connect = async () => {
  try {
    let dataBaseUrl = config.ATLAS_MONGO_URL;
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