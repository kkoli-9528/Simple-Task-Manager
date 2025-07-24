export const updateTaskStatus = (tasks, id, newStatus) => {
  return tasks.map(task =>
    task.id === id ? { ...task, status: newStatus } : task
  )
}