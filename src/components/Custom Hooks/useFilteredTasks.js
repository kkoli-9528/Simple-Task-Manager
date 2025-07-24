import { useMemo } from "react";

export default function useFilteredTasks(tasks, selectedStatus) {
  return useMemo(() => {
    if (selectedStatus === "All") return tasks
    return tasks.filter(task => task.status === selectedStatus)
  }, [tasks, selectedStatus])
}