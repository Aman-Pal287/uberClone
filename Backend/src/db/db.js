const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Db");
  } catch (error) {
    console.log("DataBase Connection error: ", error);
  }
}

module.exports = connectToDB;
