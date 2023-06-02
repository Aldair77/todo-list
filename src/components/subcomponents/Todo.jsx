import React from 'react'
import UpdateIcon from '@mui/icons-material/Update';
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from "@mui/material/styles";


export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
    const Item = styled(Box)(({ theme }) => ({
        ...theme.body2,
        textAlign: "left",
        color: theme.palette.text.secondary,
        height: 50,
        lineHeight: "60px",
        paddingLeft: "20px",
        backgroundColor: "rgb(237, 242, 249)",
      }));
    
  return (
    <Item className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        
        <UpdateIcon onClick={() => editTodo(task.id)} />
        <DeleteIcon onClick={() => deleteTodo(task.id)} />
    </Item>
  )
}