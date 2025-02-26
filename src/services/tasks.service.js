let tasks = [
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

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchTasks = async () => {
  await delay(3000);
  // throw new Error("No tasks");
  return tasks;
}
export const fetchTasksByFilter = async (searchValue) => {
  await delay(1000)
  return tasks.filter((task) => task.title.includes(searchValue))
}

export const fetchTaskById = async (id) => {
  await delay(1000)
  const task = tasks.find((task) => task._id === id)
  return task
}

export const addTask = async (task) => {
  await delay(1000)
  const newTask = {
    _id: Math.random(),
    title: task.title,
    duration: task.duration,
  }

  tasks = tasks.concat(newTask)
  return newTask
}

export const deleteTask = async (id) => {
  await delay(1000)
  tasks = tasks.filter((task) => task._id !== id)
}

export const updateTask = async (id, taskToUpdate) => {
  await delay(1000)
  let updatedTask = {}
  tasks = tasks.map((task) => {
    if (task._id === id) {
      updatedTask = { ...task, ...taskToUpdate }
      return updatedTask
    }
    return task
  })

  return updatedTask
}
