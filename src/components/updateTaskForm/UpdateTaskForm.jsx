import React, { useState } from "react";

export default function UpdateTaskForm(props) {
  const { task, setIsUpdate, handleUpdateTask } = props;

  const [newTitle, setNewTitle] = useState(task.title);
  const [newDuration, setNewDuration] = useState(task.details.duration);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTask(task.id, newTitle, newDuration);
    setIsUpdate(false);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="number"
        name="duration"
        value={newDuration}
        onChange={(e) => setNewDuration(e.target.value)}
      />
      <button type="submit">validate</button>
    </form>
  );
}
