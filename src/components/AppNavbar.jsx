import React from "react";
import { Link } from "react-router-dom";
import useApp from "../hooks/useApp";
import useAuth from "../hooks/useAuth";

const AppNavbar = () => {
  const { auth } = useAuth();
  const { menu, setMenu } = useApp();

  const { name, surname, profileImage } = auth;
  return (
    <nav className='h-[8vh] bg-white sticky top-0 flex justify-between items-center px-2 border-b-[2px] border-gray-400'>
      <div className='flex items-center justify-center gap-2'>
        <button className='md:hidden' onClick={() => setMenu(!menu)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.8}
            stroke='currentColor'
            className='w-8 h-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>

        <Link to='/app' className='font-semibold text-2xl md:text-4xl'>
          my<span className='text-blue-500'>Task</span>
        </Link>
      </div>
      <div className='flex gap-2'>
        <Link
          to='profile'
          className='bg-white hover:bg-blue-100 pr-1 pl-3 py-1 rounded-full text-white uppercase flex items-center gap-2'
        >
          <p className='text-sm text-black'>
            {name} {surname}
          </p>
          <div className='bg-blue-300 w-[5vh] h-[5vh] rounded-full flex justify-center items-center'>
            <p className='text-md uppercase'>{name.substr(0, 1)}</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default AppNavbar;
