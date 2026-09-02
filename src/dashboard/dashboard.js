// Dashboard module.

function getDashboardSummary(tasks) {
  const completed = tasks.filter((task) => task.completed).length;

  return {
    total: tasks.length,
    completed,
    pending: tasks.length - completed,
  };
}

module.exports = { getDashboardSummary };
