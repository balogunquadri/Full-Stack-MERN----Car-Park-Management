require("dotenv").config();
const mongoose = require("mongoose");
// const db = process.env.MONGO_URI;
const url = process.env.URL;

const Connect_DB = async () => {
  // const ConnectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Connected to MongoDB successfuly...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// module.exports = ConnectDB;
module.exports = Connect_DB;
