const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "user name is required"],
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      max: 8,
    },
    profilePic: {
      type: String,
      default: "",
    },
    coverPic: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
