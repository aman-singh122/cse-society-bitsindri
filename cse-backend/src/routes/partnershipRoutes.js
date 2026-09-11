const express = require("express");
const {
  createPartnership,
} = require("../controllers/partnershipController");

const router = express.Router();

router.post("/", createPartnership);

module.exports = router;