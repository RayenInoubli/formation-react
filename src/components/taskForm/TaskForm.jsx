import React, { useEffect, useState } from "react";
import "./TaskForm.css";

export default function Form(props) {
  const { handleAddTask  } = props;

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState();
  const [difficulty, setDifficulty] = useState("easy");
  const [level, setLevel] = useState("beginner");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !duration) {
      alert("You should enter a title and a duration for the task!!!");
      return;
    }

    const newTask = {
      id: Math.random().toString(),
      title,
      details: {
        duration,
        difficulty,
        level,
      },
    };

    handleAddTask(newTask);
    
    setTitle("");
    setDuration("");
    setDifficulty("easy");
    setLevel("beginner");
  };

  useEffect(() => {
    document.title = title;
  });
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create a new Task</h2>
      <input
        type="text"
        name="task"
        placeholder="put your title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        name="duration"
        placeholder="put your duration here"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <select
        name="difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
      <select
        name="level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="techlead">techlead</option>
      </select>
      <button type="submit">Add a task</button>
    </form>
  );
}
