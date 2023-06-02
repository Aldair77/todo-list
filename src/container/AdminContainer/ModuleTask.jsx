/*
"use client";
import { useTasks } from "@/context/TasksContext";
import { VscTasklist } from "react-icons/vsc"; 
import {TaskCard} from '@/components/taskcard/TaskCard'
import {RootLayout} from './layout'


function ModuleTask() {
  const { tasks } = useTasks();
  return (
    <>
    <div className="flex justify-center">
      {tasks.length === 0 ? (
        <div className="block">
          <h2 className="text-2xl">No hay Tareas</h2>
          <VscTasklist size="8rem" />
        </div>
      ) : (
        <div className="w-7/10">
          {tasks.map((task, i) => (
            <TaskCard task={task} key={i} />
          ))}
        </div>
      )}
    </div>
    <div>
      <RootLayout/>
    </div>
    </>       
  )
}

export default ModuleTask */
import { TodoWrapper } from "@/components/subcomponents/TodoWrapper";
import { Container, Grid, Paper } from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TodoForm } from "@/components/subcomponents/TodoForm";
import { Todo } from "@/components/subcomponents/Todo";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ModuleTask() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.body2,
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: 50,
    lineHeight: "60px",
    paddingLeft: "20px",
    backgroundColor: "rgb(237, 242, 249)",
  }));

  const [todos, setTodos] = useState([]);

  /* Agregar Tarea */
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  /* Borrar Tarea*/
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  /* Tarea Completada */
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /* Editar Tarea */
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  /* Ingresar a modo edición */
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      gap={3}
      sx={{ justifyContent: "center", width: "100vh" }}
    >
      <Container sx={{ width:300}}>
        <Item>
          <b>User1</b>
          <TodoForm addTodo={addTodo}/>
        </Item>
        <Item>
        {todos.map((todo) =>
        (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
        </Item>

      </Container>
      <Container sx={{ width:300}}>
        <Item>
          <b>User2</b>
        </Item>
      </Container>
      <Container sx={{ width:300}}>
        <Item>
          <b>User3</b>
        </Item>
      </Container>
      <Container sx={{ width:300}}>
        <Item>
          <b>User4</b>
        </Item>
      </Container>
    </Grid>
  );
}

export default ModuleTask;
