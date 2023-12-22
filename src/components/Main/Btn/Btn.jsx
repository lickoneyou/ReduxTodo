import React from "react";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import styles from "./Btn.module.css";

const Btn = () => {
  return (
    <div className={styles.btn}>
      <Button startDecorator={<Add />} color="neutral" onClick={function () {}}>
        ADD
      </Button>
    </div>
  );
};

export default Btn;
