import React from "react";
import Textarea from "@mui/joy/Textarea";
import styles from "./TextArea.module.css";
import { useDispatch, useSelector } from "react-redux";

export const TextArea = () => {
  const dispatch = useDispatch();
  const textAreaValue = useSelector((state) => state.value);

  return (
    <Textarea
      className={styles.textArea}
      value = {textAreaValue}
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
