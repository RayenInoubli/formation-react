import React, { useEffect, useState } from "react";
import TaskForm from "../../components/taskForm/TaskForm";
import "./TaskPage.css";
import TaskList from "../../components/taskList/TaskList";
import * as api from "../../services/tasks.service";

export default function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [searchValue, setSearchValue] = useState("");

  const steps = ["Enter the title", "Click on add button"];

  const handleAddTask = async (newTask) => {
    try {
      setIsLoading(true);
      const addedTask = await api.addTask(newTask);
      setTasks((prevTasks) => [...prevTasks, addedTask]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks((task) => task.filter((task) => task._id !== id));
  };

  const handleUpdateTask = (id, title, duration) => {
    setTasks((task) =>
      task.map((task) =>
        task._id === id
          ? { ...task, title, details: { ...task.details, duration } }
          : task
      )
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await api.fetchTasks();
        setTasks(result);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // 3ème forme de useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     if (searchValue.length === 0) {
  //       console.log("tasks empty")
  //       setTasks([])
  //       setIsLoading(false);
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue)
  //       console.log("tasks form api : " + searchValue)
  //       setTasks(result)
  //       setIsLoading(false);
  //     }
  //   }
  //   console.log("searchValue", searchValue)
  //   fetchData()
  // }, [searchValue])

  // 4ème forme de useEffect
  // useEffect(() => {
  //   let didCancel = false
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     if (!searchValue) {
  //       setTasks([])
  //       setIsLoading(false);
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue)
  //       if (!didCancel) {
  //         console.log("result: ", searchValue)

  //         setTasks(result)
  //         setIsLoading(false);
  //       }
  //     }
  //   }
  //   fetchData()

  //   return () => {
  //     console.log("cleanup: ", searchValue)
  //     didCancel = true
  //   }
  // }, [searchValue])

  return (
    <div className="task-page">
      <div className="task-side">
        <ul>
          {steps.map((step, index) => (
            <li key={index}>
              {index + 1} - {step}
            </li>
          ))}
        </ul>
        <TaskForm tasks={tasks} handleAddTask={handleAddTask} />
      </div>
       {
        isLoading ? <div>loading....</div> : (
          <TaskList
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleUpdateTask={handleUpdateTask}
          />
        )
       }
      {error && <div className="error">Fatal Error: {error.message}</div>}
    </div>
  );
}