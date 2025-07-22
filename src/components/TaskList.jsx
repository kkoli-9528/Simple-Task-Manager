import { useState } from 'react';
import './TaskList.css';
import { ComboboxDemo } from './ComboDemo';
import { TableDemo } from './TableDemo';

const TaskList = ({ task }) => {
  const [selected, setSelected] = useState("All");

  const filterList = task.filter(eachTask =>
    selected === "All" ?
      true :
      eachTask.status === selected
  );

  const handleSelect = (button) => {
    setSelected(button)
  }

  return (
    <div className="container">
      <div className={`tabs mb-5`}>
        <ComboboxDemo handleSelect={handleSelect} />
      </div>
      <TableDemo filterList={filterList} />
    </div>
  );
};

export default TaskList;