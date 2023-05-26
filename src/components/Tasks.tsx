import { TbClipboardText } from 'react-icons/tb';
import { ITask } from '../App'
import { Item } from './Item'
import styles from './Tasks.module.css'

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section>
            <header className={styles.header}>
                <div className={styles.createdTasks}>
                    <strong>Tarefas Criadas</strong>
                    <span>{tasksQuantity}</span>
                </div>
                <div className={styles.doneTasks}>
                    <strong>Condluídas</strong>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>
            <div className={styles.itemsList}>
              {tasks.map(task => (
                  <Item
                    key={task.id} 
                    task={task}
                    onDelete={onDelete}
                    onComplete={onComplete}
                  />
                    
              ))}
              
              {tasks.length <= 0 && (
                <section className={styles.empty}>
                  <TbClipboardText size={50}/>
                  <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                  </div>
                </section>
              )}
            </div>
        </section>
    )
}