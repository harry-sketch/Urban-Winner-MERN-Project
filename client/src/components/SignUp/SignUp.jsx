import React, { useState } from "react";

// Components
import BasicInput from "../Common/BasicInput/BasicInput";

const SignUp = () => {
  const [signValue, setSignValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = signValue;

  // Func
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signValue);
  };
  return (
    <div className="bg-black h-screen w-full flex items-center justify-center">
      <div className="border-4 border-red-600 w-1/3 h-4/5 rounded-xl py-6 px-10 flex items-center justify-center flex-col">
        <div className="text-2xl font-medium text-red-600 text-center">
          Sign Up
        </div>
        <BasicInput
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="button"
          className="text-white bg-red-600 py-4 w-52 text-center cursor-pointer flex items-center justify-center hover:bg-red-500 transition-all duration-300 text-base font-medium"
          onClick={(e) => handleSubmit(e)}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
