import React from "react";
import { Link } from "react-router-dom";
import useApp from "../../hooks/useApp";
import useAuth from "../../hooks/useAuth";
const Dashboard = () => {
  const { auth } = useAuth();
  const { groups, tasksInProcess } = useApp();

  const arrTasks = [];
  groups.map((e) => e.tasks.map((task) => arrTasks.push(task)));

  const yourTasksGroup = arrTasks.filter(
    (task) => task.assigned.toString() === auth._id.toString()
  );

  const tasksInProcessGroup = yourTasksGroup.filter(
    (task) => task.state == "In process"
  );

  const date = new Date();
  return (
    <div
      className={`w-full p-2 md:p-5 md:w-auto md:fixed md:m-0 md:right-0 md:left-[7vh] min-h-[92vh]`}
    >
      <div className='h-[50vh] md:h-[30vh] w-full flex flex-col md:flex-row gap-2 md:gap-5'>
        <div className='w-full md:w-1/3 bg-gray-100 rounded-xl flex overflow-hidden'>
          <p className='w-4/6 h-full flex justify-center items-center text-8xl font-bold'>
            {date.getDate()}
          </p>
          <p className='w-2/6 bg-blue-200 pl-2  h-full flex justify-start items-center md:text-md xl:text-2xl uppercase font-lato font-bold'>
            {date.toLocaleString("default", { month: "short" })} <br />{" "}
            {date.getFullYear()}
          </p>
        </div>

        <Link
          to='tasks'
          className='w-full md:w-1/3 bg-gray-100 rounded-xl flex overflow-hidden'
        >
          <p className='w-4/6 h-full flex justify-center items-center text-8xl font-bold'>
            {tasksInProcess.length}
          </p>
          <p className='w-2/6 bg-blue-200 pl-2  h-full flex justify-start items-center md:text-md xl:text-2xl uppercase font-lato font-bold'>
            Pending <br /> Tasks
          </p>
        </Link>

        <Link
          to='groups'
          className='w-full md:w-1/3 bg-gray-100 rounded-xl flex overflow-hidden'
        >
          <p className='w-4/6 h-full flex justify-center items-center text-8xl font-bold'>
            {tasksInProcessGroup.length}
          </p>
          <p className='w-2/6 bg-blue-200 pl-2  h-full flex justify-start items-center md:text-md xl:text-2xl uppercase font-lato font-bold'>
            Pending <br /> Group <br /> Tasks
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
