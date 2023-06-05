import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Dialog, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { EditTodoForm } from "./EditTodoForm";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const CardTask = styled(Paper)(({ theme }) => ({
    ...theme.body2,
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: "150px",
    backgroundColor: "rgb(237, 242, 249)",
  }));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CardTask>
      <Box sx={{ mt: 2, p: 2, height: "110px" }}>
        <p
          className={`${task.completed ? "completed" : ""}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
      </Box>
      <Box sx={{ width: 250, textAlign: "right" }}>
        <Button variant="outline">
          <EditIcon onClick={() => editTodo(task.id)} />
        </Button>
        <Button variant="outline">
          <DeleteIcon onClick={() => deleteTodo(task.id)} />
        </Button>
      </Box>
    </CardTask>
  );
};
