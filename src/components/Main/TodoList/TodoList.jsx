import React from "react";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={styles.todoList}>
      <Todo text={"123123123"} id="123" />
    </div>
  );
};

export default TodoList;
