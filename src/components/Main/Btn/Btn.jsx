import React from "react";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import styles from "./Btn.module.css";
import { useSelector } from "react-redux";
import randomId from "random-id";

const Btn = () => {
  const textAreaValue = useSelector((state) => state.value);
  function createTodos() {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.push({ value: textAreaValue, id: randomId(30, "aA0") });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <div className={styles.btn}>
      <Button
        startDecorator={<Add />}
        color="neutral"
        onClick={function (e) {
          console.log(textAreaValue);
          createTodos();
          console.log(!!localStorage.getItem("todos"));
        }}
      >
        ADD
      </Button>
    </div>
  );
};

export default Btn;
