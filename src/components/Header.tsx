import styles from './Header.module.css';
import ToDoLogo from '../assets/logo-todolist.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ToDoLogo} alt="Logo ToDo" />
        </header>
    )
}