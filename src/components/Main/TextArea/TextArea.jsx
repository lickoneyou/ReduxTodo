import React from "react";
import Textarea from "@mui/joy/Textarea";
import styles from "./TextArea.module.css";
import { useDispatch } from "react-redux";

export const TextArea = () => {
  const dispatch = useDispatch();

  return (
    <Textarea
      className={styles.textArea}
      color="neutral"
      disabled={false}
      minRows={2}
      size="lg"
      variant="outlined"
      placeholder="..."
      onChange={function (e) {
        dispatch({ type: "CHANGE", payload: e.target.value });
      }}
    />
  );
};
