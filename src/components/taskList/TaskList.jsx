import React from 'react'
import Task from '../task/Task';

function TaskList(props) {

  const { tasks, handleDeleteTask, handleUpdateTask } = props;

  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTask={handleUpdateTask}
        />
      ))}
    </div>
  );
}

export default TaskList;