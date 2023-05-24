import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import Container from "@mui/material/Container";

function Card() {
  const StyleBox = {
    height: 50,
    width: 300,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: (theme) =>
      theme.palette.mode === "dark" ? "#1A2027" : "rgb(230, 231, 232 )",
  };

  const StyleBoxpie = {
    position: "center",
    width: 300,
    height: 140,
    pb: 2,
  };

  const StylePaper = {
    height: 200,
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    ml: 6,
    backgroundColor: (theme) => (theme.palette.mode = "#f2f2f2"),
  };

  return (
    <>
      <Box elevation={1} sx={StylePaper}>
        <Box sx={StyleBox}>
          <h3>Tareas en Total</h3>
        </Box>
        <Container>
          <Box sx={StyleBoxpie}></Box>
          <Box sx={StyleBoxpie}></Box>
        </Container>
      </Box>
      <Box elevation={1} sx={StylePaper}>
        <Box sx={StyleBox}>
          <h3>Tareas en Total</h3>
        </Box>
        <Container>
          <Box sx={StyleBoxpie}></Box>
          <Box sx={StyleBoxpie}></Box>
        </Container>
      </Box>
      <Box elevation={1} sx={StylePaper}>
        <Box sx={StyleBox}>
          <h3>Tareas en Total</h3>
        </Box>
        <Container>
          <Box sx={StyleBoxpie}></Box>
          <Box sx={StyleBoxpie}></Box>
        </Container>
      </Box>
    </>
  );
}

export default Card;
