import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook
import useEcom from "../../hooks/useEcom";

// Components
import BasicInput from "../Common/BasicInput/BasicInput";

const Login = () => {
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  const { email, password } = logIn;

  const navigate = useNavigate();

  const { addToast } = useEcom();

  // Funs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogIn((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4443/logIn", {
      method: "Post",
      body: JSON.stringify(logIn),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.name) {
      localStorage.setItem("user", JSON.stringify(data));
      addToast("Logged In successfully !!", "success");
      navigate("/product");
      setLogIn({ email: "", password: "" });
    } else if (!data.name) {
      addToast("No uSer  Found !!!", "warning");
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#E1B2CC] to-[#F4F4F7]">
      <div className="bg-white w-1/3 h-4/6 rounded-lg  shadow-lg flex flex-col items-start">
        <div className="flex flex-col items-start border-b-2 border-gray-200 w-full py-4 px-6">
          <div className="text-2xl text-black text-center font-extrabold float-left">
            Log in
          </div>
        </div>
        <div className="py-4 px-10 w-full">
          <BasicInput
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <BasicInput
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button
            className="bg-gradient-to-r from-[#30B4E3] to-[#3FC6EA] px-6 py-3 cursor-pointer border-none outline-none w-full"
            type="button"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
