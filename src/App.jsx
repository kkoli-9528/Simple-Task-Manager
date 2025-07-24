import { useState } from 'react';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className={`${styles.App} min-h-screen flex`}>
      <div className={`${styles.container} flex flex-col w-full transition-all duration-500 ${task.length ? "justify-start" : "justify-center"} items-center`}>
        <h3 className={`${styles.header} scroll-m-20 text-2xl font-semibold tracking-tight lg:w-full text-center`}>Task Manager</h3>
        <TaskForm task={task} setTask={setTask} />
        <TaskList task={task} setTask={setTask} />
      </div>
    </div>
  );
};

export default App;