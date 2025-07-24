import { useState } from 'react';
import './TaskList.css';
import { ComboboxDemo } from './ComboDemo';
import { TableDemo } from './TableDemo';
import useFilteredTasks from './Custom Hooks/useFilteredTasks';

const TaskList = ({ task, setTask }) => {
  const [selected, setSelected] = useState("All");

  const filterList = useFilteredTasks(task, selected)

  const handleSelect = (button) => {
    setSelected(button)
  }

  return (
    <div className="container flex flex-col mt-4">
      <div className={`tabs mb-4 flex justify-end`}>
        <ComboboxDemo handleSelect={handleSelect} />
      </div>
      <TableDemo filterList={filterList} setTask={setTask} />
    </div>
  );
};

export default TaskList;