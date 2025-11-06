const captainModel = require("../models/captain.model");

async function createCaptain({
  firstName,
  lastName,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) {
  if (
    !firstName ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All fields are required");
  }

  const captain = captainModel.create({
    fullName: { firstName, lastName },
    email,
    password,
    vehicle: {
      color,
      capacity,
      plate,
      vehicleType,
    },
  });
  return captain;
}

module.exports = { createCaptain };
