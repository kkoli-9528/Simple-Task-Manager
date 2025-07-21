import { useState } from 'react';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className={styles.App}>
      <div className={`${styles.container} md:min-w-sm flex flex-col justify-center items-center xl:min-w-md`}>
        <h3 className={`${styles.header} scroll-m-20 text-2xl font-semibold tracking-tight lg:w-full text-center`}>Task Manager</h3>
        <TaskForm task={task} setTask={setTask} />
        <TaskList task={task} />
      </div>
    </div>
  );
};

export default App;