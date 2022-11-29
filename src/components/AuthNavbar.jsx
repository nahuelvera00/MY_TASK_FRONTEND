import React from "react";
import { Link } from "react-router-dom";
const AuthNavbar = () => {
  return (
    <div className='h-[10vh] w-full flex justify-center items-center border-b-2 border-gray-400'>
      <Link
        to='/index'
        className='text-2xl md:text-4xl font-semibold font-lato'
      >
        my<span className='text-blue-500'>Task</span>
      </Link>
    </div>
  );
};

export default AuthNavbar;
