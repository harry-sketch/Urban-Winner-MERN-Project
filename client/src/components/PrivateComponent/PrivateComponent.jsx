import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const isAuth = localStorage.getItem("user");
  console.log("Private Comp--------", isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateComponent;
