const Partnership = require("../models/Partnership");
const { sendPartnershipEmail } = require("../utils/email");

const createPartnership = async (req, res, next) => {
  try {
    const {
      organizationName,
      contactPerson,
      workEmail,
      phoneNumber,
      website,
      partnershipType,
      message,
    } = req.body;

    // Required fields
    if (
      !organizationName ||
      !contactPerson ||
      !workEmail ||
      !partnershipType ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(workEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid work email address.",
      });
    }

    // Save to MongoDB
    const partnership = await Partnership.create({
      organizationName: organizationName.trim(),
      contactPerson: contactPerson.trim(),
      workEmail: workEmail.trim().toLowerCase(),
      phoneNumber: phoneNumber?.trim() || "",
      website: website?.trim() || "",
      partnershipType,
      message: message.trim(),
    });

    // Send notification email
    try {
      await sendPartnershipEmail(partnership);
    } catch (emailError) {
      console.error(
        "Partnership email failed:",
        emailError.message
      );

      // Submission is already safely stored in DB.
      // Do not fail the user's request because of email failure.
    }

    return res.status(201).json({
      success: true,
      message:
        "REQUEST RECEIVED / Thanks for reaching out. Our team will review your proposal and get back to you shortly.",
      partnershipId: partnership._id,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPartnership,
};