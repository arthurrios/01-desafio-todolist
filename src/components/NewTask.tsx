import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './NewTask.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function NewTask({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

    return (
        <form className={styles.newTaskForm} onSubmit={handleSubmit}>
            <input 
            onChange={onChangeTitle}
            value={title}
            placeholder="Adicione uma nova tarefa"></input>
            <button type="submit">
                Criar
                <AiOutlinePlusCircle size={20}/>
            </button>
        </form>
    )
}