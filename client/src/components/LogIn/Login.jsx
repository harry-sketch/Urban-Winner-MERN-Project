import React from "react";
import BasicInput from "../Common/BasicInput/BasicInput";

const Login = () => (
  <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#E1B2CC] to-[#F4F4F7]">
    <div className="bg-white w-1/3 h-4/6 rounded-lg  shadow-lg flex flex-col items-start">
      <div className="flex flex-col items-start border-b-2 border-gray-200 w-full py-4 px-6">
        <div className="text-2xl text-black text-center font-extrabold float-left">
          Log in
        </div>
      </div>
      <div className="py-4 px-10 w-full">
        <BasicInput placeholder="Email" type="text" name="email" />
        <BasicInput placeholder="Password" type="text" name="password" />
        <button
          className="bg-gradient-to-r from-[#30B4E3] to-[#3FC6EA] px-6 py-3 cursor-pointer border-none outline-none w-full"
          type="button"
        >
          Log in
        </button>
      </div>
    </div>
  </div>
);

export default Login;
