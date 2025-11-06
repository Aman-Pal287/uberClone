const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", userRoutes);

app.use("/api/auth/captain", captainRoutes);

module.exports = app;
