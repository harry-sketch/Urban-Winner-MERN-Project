import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Custom  Hooks
import useEcom from "../../hooks/useEcom";

// Components
import BasicInput from "../Common/BasicInput/BasicInput";

const SignUp = () => {
  const [signValue, setSignValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = signValue;

  const navigate = useNavigate();

  const { addToast } = useEcom();

  // Func

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4443/signUp", {
      method: "Post",
      body: JSON.stringify(signValue),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    addToast("msg send Successfully !!", "success");
    navigate("/product");
    setSignValue({ name: "", email: "", password: "" });
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="border-4 border-red-600 w-1/3 h-4/5 rounded-xl py-6 px-10 flex items-center justify-center flex-col">
        <div className="text-2xl font-medium text-red-600 text-center">
          Sign Up
        </div>
        <BasicInput
          type="text"
          name="name"
          placeholder="Username"
          value={name}
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
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
