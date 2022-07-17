import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Custom  Hooks
import useEcom from "../../hooks/useEcom";

// Components
import BasicInput from "../Common/BasicInput/BasicInput";
import SignUpLeft from "./SignUpLeft/SignUpLeft";

const SignUp = () => {
  const [signValue, setSignValue] = useState({
    name: "",
    email: "",
    password: "",
  });

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
    localStorage.setItem("user", JSON.stringify(data));
    addToast("Sign Up successfully!", "success");
    navigate("/product");
    setSignValue({ name: "", email: "", password: "" });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#E1B2CC] to-[#F4F4F7]">
      <SignUpLeft
        handleSubmit={handleSubmit}
        signValue={signValue}
        handleChange={handleChange}
      />
    </div>
  );
};

export default SignUp;
