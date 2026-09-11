require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");
const applicationRoutes = require("./routes/applicationRoutes");
const partnershipRoutes = require("./routes/partnershipRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 5000;


/* =========================================================
   DATABASE
========================================================= */

connectDB();


/* =========================================================
   SECURITY
========================================================= */

app.use(helmet());


/* =========================================================
   CORS
========================================================= */

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://cse-society-bitsindri.vercel.app",
];

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(
    process.env.FRONTEND_URL.replace(/\/$/, "")
  );
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without origin
      // such as Postman/server-side requests.
      if (!origin) {
        return callback(null, true);
      }

      const cleanOrigin = origin.replace(/\/$/, "");

      if (allowedOrigins.includes(cleanOrigin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
    },

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);


/* =========================================================
   BODY
========================================================= */

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));


/* =========================================================
   RATE LIMITING
========================================================= */

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,

  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Too many requests. Please try again later.",
  },
});

app.use("/api", apiLimiter);


/* =========================================================
   HEALTH
========================================================= */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CSE Society backend is running.",
  });
});


/* =========================================================
   ROUTES
========================================================= */

app.use(
  "/api/applications",
  applicationRoutes
);

app.use(
  "/api/partnerships",
  partnershipRoutes
);


/* =========================================================
   404
========================================================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});


/* =========================================================
   ERROR HANDLER
========================================================= */

app.use(errorHandler);


/* =========================================================
   SERVER
========================================================= */

app.listen(PORT, () => {
  console.log(
    `CSE Society backend running on port ${PORT}`
  );
});