import React from "react";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <Todo text={todo.value} id={todo.id} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
