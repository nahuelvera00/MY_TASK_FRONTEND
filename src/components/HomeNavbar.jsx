import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <nav className='h-[8vh] bg-white sticky top-0 flex justify-between items-center px-2 md:px-10 border-b-[2px] border-gray-400'>
      <p className='font-semibold text-2xl md:text-4xl'>
        my<span className='text-blue-500'>Task</span>
      </p>
      <div className='flex gap-2'>
        <Link
          to='/auth'
          className='bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full text-white uppercase'
        >
          sign in
        </Link>
        <Link
          to='/auth/register'
          className='bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full text-white uppercase'
        >
          Sing up
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavbar;
