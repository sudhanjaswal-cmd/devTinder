const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sudhanshu:rajput@cluster0.hvagagi.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
