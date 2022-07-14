import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const isAuth = localStorage.getItem("user");
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateComponent;
