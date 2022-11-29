import React from "react";
import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";

const AuthLayout = () => {
  return (
    <div className='min-h-[100vh] w-full flex flex-col justify-center items-center'>
      <AuthNavbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
