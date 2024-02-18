import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";

function ToDoItem({ todo }) {
  // Funktion zum Konvertieren des DueDate in ein lesbares Format
  const formattedDueDate = new Date(todo.dueDate).toDateString();

  return (
    <div className={styles.mainContainer}>
      <h1>ToDo-Item</h1>
      <div className={styles.horizontalLine}></div>
      <p>Aufgabe: {todo.task}</p>
      <p>DueDate: {formattedDueDate}</p>
      <label>
        Geschafft: <input type="checkbox" defaultChecked={todo.isDone}></input>
      </label>
    </div>
  );
}

export default ToDoItem;
