import { useState } from "react";
import axios from "axios";


import TaskItem from "./components/TaskItem";
import { useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async() =>{
    try {
      const { data } = await axios.get("http://localhost:8000/tasks")
      setTasks(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchTasks();
  },[])


  return (
    <>
      {tasks.map((task)=>{
        return <TaskItem key={task.id} task={task}/>
    })}
    </>
  );
}

export default App;
