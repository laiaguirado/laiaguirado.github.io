
const mongoose = require('mongoose');
const config = require('./config');

const connect = async () => {
  try {
    let localUrl = config.MONGO_URL;
    let dataBaseUrl = config.MONGO_ATLAS_URL;
    await mongoose.connect(dataBaseUrl);
    console.log("Mongoose connected");
  } catch (e) {
    console.error(`Could not connect to MongoDB: ${e}`);
  }
}

const disconnect = async () => {
  return mongoose.connection.close();
}

module.exports = {
  connect,
  disconnect,
}