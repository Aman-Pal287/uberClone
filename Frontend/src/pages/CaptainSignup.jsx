import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <form onSubmit={submitHandler}>
          <img
            className="w-16 mb-8"
            src="https://toppng.com/uploads/preview/uber-logo-png-uber-logo-2018-11563110096yltfjpzwbm.png"
            alt=""
          />
          <h3 className="text-lg font-medium mb-3">What's your name</h3>
          <div className="flex gap-1 mb-7">
            <input
              className="bg-[#eeeeee] rounded w-1/2 text-lg placeholder:text-base px-4 py-2 border"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] rounded w-1/2 text-lg placeholder:text-base px-4 py-2 border"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-3">What's your email</h3>
          <input
            className="bg-[#eeeeee] rounded w-full text-lg placeholder:text-base px-4 py-2 border mb-7"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-3">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded w-full text-lg placeholder:text-base px-4 py-2 border mb-7"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-bold rounded w-full text-lg px-4 py-2 mb-3">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Sign in
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="flex justify-center items-center bg-[#d5622d] text-white font-bold rounded w-full text-lg px-4 py-2 mb-7"
        >
          Sign up as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
