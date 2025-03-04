// TaskDetails.jsx
import React, { useEffect, useState } from "react";
import * as api from "../../services/tasks.service";
import { useParams } from "react-router-dom";
import "./TaskDetails.css";

function TaskDetails() {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await api.fetchTaskById(id * 1);
        setTask(result);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (isLoading)
    return (
      <div className="task-details-loading">
        <div className="loader">Loading...</div>
      </div>
    );

  if (error)
    return (
      <div className="task-details-error">
        <div className="error-message">Error: {error.message}</div>
      </div>
    );

  if (!task)
    return (
      <div className="task-details-empty">
        <div className="no-task">No task found</div>
      </div>
    );

  return (
    <div className="task-details-container">
      <div className="task-details-card">
        <div className="task-details-content">
          <div className="task-info-row">
            <span className="task-label">Title:</span>
            <span className="task-value">{task.title}</span>
          </div>
          <div className="task-info-row">
            <span className="task-label">Duration:</span>
            <span className="task-value">
              {task.details?.duration || "N/A"} minutes
            </span>
          </div>
          <div className="task-info-row">
            <span className="task-label">Difficulty:</span>
            <span
              className={`task-value difficulty-${
                task.details?.difficulty || "na"
              }`}
            >
              {task.details?.difficulty || "N/A"}
            </span>
          </div>
          <div className="task-info-row">
            <span className="task-label">Level:</span>
            <span className="task-value">{task.details?.level || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;