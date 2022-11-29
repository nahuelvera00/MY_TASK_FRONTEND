import React from "react";
import { Outlet } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
const IndexLayout = () => {
  return (
    <div className='flex flex-col min-h-[100vh] font-lato'>
      <HomeNavbar />
      <Outlet />
    </div>
  );
};

export default IndexLayout;
