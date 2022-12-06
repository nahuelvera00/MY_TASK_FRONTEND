import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import LoadingSpin from "react-loading-spin";

//COMPONENTS
import AppAsideNav from "../components/AppAsideNav";
import AppNavbar from "../components/AppNavbar";

//CONTEXT
import useAuth from "../hooks/useAuth";
import useApp from "../hooks/useApp";

//AXIOS
import clientAxios from "../config/clientAxios";

const ClientLayout = () => {
  const { auth, loading } = useAuth();

  const [loadingApp, setLoadingApp] = useState(true);
  const {
    setTasks,
    setGroups,
    setTasksInProcess,
    setTasksComplete,
    setTasksInProcessGroup,
  } = useApp();

  const getData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const tasksData = new Promise(async function (resolve, reject) {
      try {
        const { data } = await clientAxios("/api/task", config);
        const tasksProcess = data.filter((e) => e.state == "In process");
        setTasksInProcess(tasksProcess);
        const taskComplete = data.filter((e) => e.state == "Complete");
        setTasksComplete(taskComplete);
        resolve(setTasks(data));
      } catch (error) {}
    });

    const groupsData = new Promise(async function (resolve, reject) {
      try {
        const { data } = await clientAxios("/api/group", config);

        resolve(setGroups(data));
      } catch (error) {}
    });

    await Promise.allSettled([tasksData, groupsData]).then();

    setLoadingApp(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return (
      <div className='w-full h-[100vh] bg-gray-200 flex flex-col justify-center items-center gap-2'>
        <LoadingSpin width='5px' primaryColor='#3B82F6' />
        <p className='uppercase font-lato text-xl'>loading app...</p>
      </div>
    );

  return (
    <div className='h-[100vh] w-full'>
      {auth._id ? (
        <div className='flex flex-col min-h-[100vh] w-full font-lato'>
          <AppNavbar />
          <div className='max-w-[100vw] h-[92vh] flex'>
            <AppAsideNav />
            {loadingApp ? <p>spining......</p> : <Outlet />}
          </div>
        </div>
      ) : (
        <Navigate to='/index' />
      )}
    </div>
  );
};

export default ClientLayout;
