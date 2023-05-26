import { ITask } from '../App'
import styles from './Item.module.css'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'


interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Item({ task, onDelete, onComplete }: Props) {

  return (
    <div className={styles.taskBox}>
      <button 
        onClick={() => onComplete(task.id)}
        className={styles.checkButton}>
        {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
      </button>
      <p
      className={task.isCompleted ? styles.textCompleted : ''}
      >{task.title}</p>
      <button className={styles.trashButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20}/>
      </button>
    </div>
  )
}