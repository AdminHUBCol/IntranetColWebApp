// Create Server
const express = require("express");
const app = express();

// Check request status code
const morgan = require("morgan");
app.use(morgan("dev"));

// Load env varriables from .env file
require('dotenv').config();

// Set allowed connections
const cors = require("cors");
app.use(cors({ origin: "*" }));

// Parse to JSON
app.use(express.json());

// Get route modules
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const getDataRoute = require("./routes/getData");

// Blueprints of endpoints
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/getData", getDataRoute);

module.exports = app;
