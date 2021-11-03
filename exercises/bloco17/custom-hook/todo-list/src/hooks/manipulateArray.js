import { useState } from "react";

const useArray = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (value) => {
    setTasks([...tasks, value]);
  }
  return {
    addTask,
    tasks,
  }
}

export default useArray;