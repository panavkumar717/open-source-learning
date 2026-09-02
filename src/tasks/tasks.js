// Task module.

const tasks = [
  { id: 1, title: "Create GitHub repository", completed: true },
  { id: 2, title: "Create first feature branch", completed: false },
];

function getTasks() {
  return tasks;
}

function filterTasks(completed) {
  if (typeof completed !== "boolean") {
    throw new Error("completed must be a boolean");
  }

  return tasks.filter((task) => task.completed === completed);
}

function addTask(title) {
  const task = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(task);
  return task;
}

// Delete Task
function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    throw new Error("Task not found");
  }

  return tasks.splice(index, 1)[0];
}

module.exports = { getTasks, addTask, filterTasks, deleteTask };
