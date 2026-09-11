const mongoose = require("mongoose");

const partnershipSchema = new mongoose.Schema(
  {
    organizationName: {
      type: String,
      required: true,
      trim: true,
    },

    contactPerson: {
      type: String,
      required: true,
      trim: true,
    },

    workEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phoneNumber: {
      type: String,
      trim: true,
      default: "",
    },

    website: {
      type: String,
      trim: true,
      default: "",
    },

    partnershipType: {
      type: String,
      required: true,
      enum: [
        "Event Sponsorship",
        "Workshop / Tech Talk",
        "Hackathon Partnership",
        "Internship / Recruitment",
        "Mentorship",
        "Brand Collaboration",
        "Other",
      ],
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Partnership", partnershipSchema);