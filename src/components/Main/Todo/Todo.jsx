import { Button } from "@mui/joy";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({ id, text }) => {
  const dispatch = useDispatch();

  function deleteTodo() {
    const todos = JSON.parse(localStorage.getItem("todos")).filter(
      (el) => el.id !== id
    );
    localStorage.setItem("todos", JSON.stringify(todos));
    dispatch({ type: "UPDATE" });
  }

  return (
    <Card
      sx={{
        minWidth: 200,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 200,
        margin: "20px",
      }}
    >
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="md" color="danger" id={id} onClick={deleteTodo}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Todo;
