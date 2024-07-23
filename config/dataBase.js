const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB connection successfully");
  } catch (err) {
    console.error(err);
  }
};

module.exports = dbConnect;
