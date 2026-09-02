// Task module.

const tasks = [
  { id: 1, title: "Create GitHub repository", completed: true },
  { id: 2, title: "Create first feature branch", completed: false },
];

function getTasks() {
  return tasks;
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

module.exports = { getTasks, addTask };
