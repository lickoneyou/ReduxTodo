import React from "react";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";

const Btn = () => {
  return (
    <Button startDecorator={<Add />} color="neutral" onClick={function () {}}>
      ADD
    </Button>
  );
};

export default Btn;
