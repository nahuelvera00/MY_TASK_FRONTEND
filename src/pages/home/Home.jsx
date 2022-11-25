import React from "react";

import taskPNG from "../../public/images/task.png";
import meetingPNG from "../../public/images/meeting.png";

const Home = () => {
  return (
    <div>
      <div className='h-[92vh] w-full flex justify-center'>
        <div className='p-5 w-full md:w-3/4 h-full flex justify-center items-center'>
          <div className='bg-gray-100 h-full w-full rounded-md flex flex-col md:flex-row-reverse md:items-center'>
            <div className='w-full h-1/2 flex justify-center items-center'>
              <h1 className='text-blue-500'>
                <span className='text-2xl md:text-5xl'>
                  Welcome to <span className='text-black'>my</span>Task
                </span>{" "}
                <br />
                <br />
                <span className='md:text-xl'>
                  Here you can create your tasks
                </span>
                <br />
                <span className='md:text-xl'>and complete them...</span> <br />
                <br />
                <button className='text-black hover:underline md:text-xl'>
                  Register now
                </button>{" "}
                <span className='md:text-xl'>totally free</span>
                <br />
                <span className='md:text-xl'>and start using it</span>
              </h1>
            </div>
            <div className='w-full h-1/2 flex justify-center items-center'>
              <img className='h-5/6' src={taskPNG} alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='h-[92vh] w-full flex justify-center'>
        <div className='p-5 w-full md:w-3/4 h-full flex justify-center items-center'>
          <div className='bg-gray-100 h-full w-full rounded-md flex flex-col md:flex-row md:items-center'>
            <div className='w-full h-1/2 flex justify-center items-center'>
              <h1 className='text-blue-500'>
                <span className='text-2xl md:text-5xl'>
                  Create your <span className='text-black'>Groups</span>
                </span>{" "}
                <br />
                <br />
                <span className='md:text-xl'>
                  Add members and assign them <br />
                  tasks...
                </span>
                <br />
                <br />
                <span className='md:text-xl'>
                  Keep track of tasks according to <br />
                  their status.
                </span>{" "}
              </h1>
            </div>
            <div className='w-full h-1/2 flex justify-center items-center'>
              <img className='h-5/6' src={meetingPNG} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
