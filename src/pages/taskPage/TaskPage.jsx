import React, { useState } from "react";
import TaskForm from "../../components/taskForm/TaskForm";
import "./TaskPage.css";
import TaskList from "../../components/taskList/TaskList";

export default function TaskPage() {
  const predefinedTasks = [
    {
      title: "Learn Html",
      details: {
        duration: 60,
        difficulty: "easy",
        level: "beginner",
      },
      id: 1,
    },
    {
      title: "Learn Css",
      details: {
        duration: 120,
        difficulty: "medium",
        level: "intermediate",
      },
      id: 2,
    },
    {
      title: "Learn JavaScript",
      details: {
        duration: 160,
        difficulty: "hard",
        level: "techlead",
      },
      id: 3,
    },
  ];

  const [tasks, setTasks] = useState(predefinedTasks);
  const [isVisible, setIsVisible] = useState(true);

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
    </div>
  );
}
