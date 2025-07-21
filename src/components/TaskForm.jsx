import styles from './TaskForm.module.css';
import { useState } from 'react';
import useDebounce from './useDebounce';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TaskForm = ({ setTask }) => {
  const [title, setTitle] = useState("");

  // useDebounce() doesn’t prevent re-renders, it delays a certain action so that it only happens once instead of multiple times.

  const debounceValue = useDebounce(title, 100);

  // console.log("TaskForm rendered");

  // useEffect(() => {
  //   console.log("Debounced title:", debounceValue);
  // }, [debounceValue]);


  const handleSubmit = (e) => {
    e.preventDefault()
    setTask(prevState => {

      // The below expression will give you the element at the end of the array
      /* console.log(prevState[prevState.length - 1]) */

      // The below expression will give you the value of the object with key as ["id"], ex: object["key"]
      /* console.log(prevState[prevState.length - 1]["id"]) */

      return [
        ...prevState,
        {
          id: prevState.length <= 0 ? 1 : prevState[prevState.length - 1]["id"] + 1,
          title: debounceValue,
          status: "In Progress"
        }
      ]
    })

    setTitle("")
  }

  return (
    <div className={`${styles.container} mt-4`}>
      <div className={styles.containerLayout}>
        <form className={styles.formCointainer} onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between gap-y-3 w-full sm:flex-row gap-x-2 lg:w-full">
            <Input type="text" className={`${styles.taskTitle}`} name="title" id="task-title" placeholder="New Task" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Button type="submit" className={`${styles.submitButton} bg-black text-white px-4 py-2 rounded-md`}>
              Add Task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;