const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

async function registerUser(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }

  const {
    fullName: { firstName, lastName },
    email,
    password,
  } = req.body;

  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
}

async function loginUser(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select(`+password`);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();

  res.status(200).json({ token, user });
}

module.exports = { registerUser, loginUser };
