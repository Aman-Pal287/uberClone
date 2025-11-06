const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
} = require("../controllers/captain.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must  be at least 3 character long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 character long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 character long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Vehicle type must be car, motorcycle, or auto"),
  ],
  registerCaptain
);

router.post("/login", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character long"),
  ,
  loginCaptain,
]);

router.get("/profile", authMiddleware.authCaptain, getCaptainProfile);

router.get("/logout", authMiddleware.authCaptain, logoutCaptain);

module.exports = router;
