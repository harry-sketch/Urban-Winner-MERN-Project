import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateComponent;
