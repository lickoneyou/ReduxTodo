import React from "react";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import styles from "./Btn.module.css";
import { useSelector } from "react-redux";

const Btn = () => {
  const textAreaValue = useSelector((state) => state.value);

  return (
    <div className={styles.btn}>
      <Button
        startDecorator={<Add />}
        color="neutral"
        onClick={function () {
          console.log(textAreaValue);
        }}
      >
        ADD
      </Button>
    </div>
  );
};

export default Btn;
