const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },

    studentEmail: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
    },

    registrationNumber: {
      type: String,
      required: [true, "Registration number is required"],
      trim: true,
      unique: true,
    },

    year: {
      type: String,
      required: [true, "Year of study is required"],
      enum: {
        values: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
        message: "Invalid year of study",
      },
    },

    domain: {
      type: String,
      required: [true, "Primary domain is required"],
      trim: true,
    },

    otherDomain: {
      type: String,
      trim: true,
      default: "",
    },

    profileUrl: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;