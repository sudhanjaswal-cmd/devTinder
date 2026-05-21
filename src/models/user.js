const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 6,
      maxlength: 10,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
      max: 50,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photourl: {
      type: String,
      default: "https://www.mjunction.in/wp-content/uploads/2020/09/Dummy.jpg",
    },
    about: {
      type: String,
      default: "About the user",
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true },
);
const User = mongoose.model("User", userSchema);

module.exports = User;
