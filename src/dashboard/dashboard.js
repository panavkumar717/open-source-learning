// Dashboard module.

function getDashboardSummary(tasks) {
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;

  const completionPercentage =
    tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);

  return {
    total: tasks.length,
    completed,
    pending,
    completionPercentage,
  };
}