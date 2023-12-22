import React from "react";
import { TextArea } from "./TextArea/TextArea";
import styles from "./Main.module.css";
import Btn from "./Btn/Btn";
import TodoList from "./TodoList/TodoList";

const Main = () => {
  return (
    <main className={styles.main}>
      <TextArea />
      <Btn />
      <TodoList />
    </main>
  );
};

export default Main;
