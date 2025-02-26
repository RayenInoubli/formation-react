import React, { useEffect, useState } from "react";
import TaskForm from "../../components/taskForm/TaskForm";
import "./TaskPage.css";
import TaskList from "../../components/taskList/TaskList";
import * as api from "../../services/tasks.service";

export default function TaskPage() {

  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const steps = ["Enter the title", "Click on add button"];

  const handleVisibility = () => setIsVisible(!isVisible);

  const handleAddTask = (newTask) => {
    setTasks((task) => [...task, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((task) => task.filter((task) => task.id !== id));
  };

  const handleUpdateTask = (id, title, duration) => {
    setTasks((task) =>
      task.map((task) =>
        task.id === id
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
  }, [])
  return (
    <div className="task-page">
      <button className="toggle-visibility" onClick={handleVisibility}>
        {isVisible ? "Hide" : "Show"}
      </button>
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
      {isVisible && (
        <TaskList
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTask={handleUpdateTask}
        />
      )}
      {isLoading && <div>loading....</div>}
      {error && <div className="error">Fatal Error: {error.message}</div>}
    </div>
  );
}
