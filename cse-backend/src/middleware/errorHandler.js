const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "An application with this registration number already exists.",
    });
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map(
      (error) => error.message
    );

    return res.status(400).json({
      success: false,
      message: messages.join(", "),
    });
  }

  res.status(500).json({
    success: false,
    message: "Something went wrong on the server.",
  });
};

module.exports = errorHandler;