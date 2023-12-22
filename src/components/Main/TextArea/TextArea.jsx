import React from "react";
import Textarea from "@mui/joy/Textarea";
import styles from "./TextArea.module.css";

const TextArea = () => {
  return (
    <Textarea
      className={styles.textArea}
      color="neutral"
      disabled={false}
      minRows={2}
      size="lg"
      variant="outlined"
      placeholder="..."
    />
  );
};

export default TextArea;
