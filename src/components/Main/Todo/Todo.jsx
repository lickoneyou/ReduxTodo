import { Button } from "@mui/joy";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

const Todo = ({ id, text }) => {
  return (
    <Card
      sx={{
        minWidth: 200,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 200,
        margin: '20px'
      }}
    >
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="md" color="danger" id={id}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Todo;
