import React, { useState } from "react";
import "./Task.css";
import UpdateTaskForm from "../updateTaskForm/UpdateTaskForm";

function Task(props) {
  const { task, handleDeleteTask, handleUpdateTask} = props;
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <div className="task">
      {!isUpdate ? (
        <>
          <div className="task-main">
            <div className="title">{task.title}</div>
            <div className="actions">
              <span
                className="delete-btn"
                onClick={() => handleDeleteTask(task.id)}
              >
                delete
              </span>
              <span className="update-btn" onClick={() => setIsUpdate(true)}>
                update
              </span>
            </div>
          </div>
          {task.details && (
            <div className="infos">
              <div>{task.details.duration || "60"}</div>
              <div>{task.details.difficulty}</div>
              <div>{task.details.level}</div>
            </div>
          )}
        </>
      )
      : <UpdateTaskForm task={task} setIsUpdate={setIsUpdate} handleUpdateTask={handleUpdateTask} />
    }
    </div>
  );
}

export default Task;
