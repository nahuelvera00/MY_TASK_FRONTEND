import { useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [groups, setGroups] = useState([]);
  const [tasksInProcess, setTasksInProcess] = useState([]);
  const [tasksComplete, setTasksComplete] = useState([]);
  const [tasksInProcessGroup, setTasksInProcessGroup] = useState([]);

  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        tasks,
        setTasks,
        groups,
        setGroups,
        tasksInProcess,
        setTasksInProcess,
        tasksComplete,
        setTasksComplete,
        setTasksInProcessGroup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
