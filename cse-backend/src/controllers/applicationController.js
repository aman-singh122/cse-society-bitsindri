const Application = require("../models/Application");
const { sendApplicationEmail } = require("../utils/email");

const createApplication = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      studentEmail,
      registrationNumber,
      year,
      domain,
      otherDomain,
      profileUrl,
    } = req.body;

    // Save application to MongoDB
    const application = await Application.create({
      fullName,
      email,
      studentEmail,
      registrationNumber,
      year,
      domain,
      otherDomain,
      profileUrl,
    });

    // Send email notification
    try {
      await sendApplicationEmail(application);
    } catch (emailError) {
      console.error("Application saved, but email failed:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      data: {
        id: application._id,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createApplication,
};