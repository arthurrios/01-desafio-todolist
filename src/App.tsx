import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import { v4 as uuidv4 } from 'uuid';
import "./global.css";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}


export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
          setTasks(JSON.parse(saved));
        }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle: string) {
    setTasksAndSave([...tasks, {
      id: uuidv4(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id!== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              isCompleted:!task.isCompleted
            }
          }
          return task;
        });
        setTasksAndSave(newTasks)
        ;
  }

  return ( 
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <NewTask onAddTask={addTask}/>
        <Tasks
          onDelete={deleteTaskById}
          onComplete={toggleTaskCompletedById}
          tasks={tasks}
        />
      </div>
    </div>
  )
}

export default App;
