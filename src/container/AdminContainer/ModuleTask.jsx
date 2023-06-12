import { Container, Grid, Paper } from "@mui/material";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TodoForm } from "@/components/task/TodoForm";
import { Todo } from "@/components/task/Todo";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "@/components/task/EditTodoForm";
import "../../styles/Home.module.css";

function ModuleTask() {
  const ColumUser = styled(Paper)(({ theme }) => ({
    ...theme.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 50,
    display: "flex",
    justifyContent: "right",
    lineHeight: "60px",
    paddingLeft: "20px",
    backgroundColor: "rgb(237, 242, 249)",
    mb: 3,
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
      sx={{ justifyContent: "center", width: "100vh",mt:5 }}
    >
      <Container sx={{ width: 300 }}>
        <ColumUser>
          <Box sx={{ bgColor: "blue", width: 150 }}>
            <b>Usuario</b>
          </Box>
          <TodoForm addTodo={addTodo} />
        </ColumUser>

        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <div className="CardTask">
              <Todo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
            </div>
          )
        )}
      </Container>
    </Grid>
  );
}

export default ModuleTask;
