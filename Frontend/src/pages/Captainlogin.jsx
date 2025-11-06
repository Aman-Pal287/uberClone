import React, { useState } from "react";
import { Link } from "react-router-dom";

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    console.log(captainData);

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
          <h3 className="text-lg font-medium mb-3">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] rounded w-full text-lg placeholder:text-base px-4 py-2 border mb-7"
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
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          className="flex justify-center items-center bg-[#d5622d] text-white font-bold rounded w-full text-lg px-4 py-2 mb-7"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
