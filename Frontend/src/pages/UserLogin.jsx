import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <form onSubmit={submitHandler}>
          <img
            className="w-16 mb-8"
            src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
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
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="flex justify-center items-center bg-[#10b461] text-white font-bold rounded w-full text-lg px-4 py-2 mb-7"
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
