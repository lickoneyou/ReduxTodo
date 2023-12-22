import React from "react";
import Textarea from "@mui/joy/Textarea";

const TextArea = () => {
  return (
    <Textarea
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
