import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import PieChart from "@/components/chartjs/PieChart";

export default function Module() {
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
    <Grid sx={{ flexGrow: 1, display: "flex" }}>
      <Grid gap={1}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          gap={3}
        >
          <Paper elevation={1} sx={StylePaper}>
            <Box sx={StyleBox}>
              <h3>Tareas en Total</h3>
            </Box>
            <Box sx={StyleBoxpie}>
              <PieChart m={2} />
            </Box>
          </Paper>

          <Paper elevation={1} sx={StylePaper}>
            <Box sx={StyleBox}>
              <h3>Tareas Pendientes</h3>
            </Box>
            <Box sx={StyleBoxpie}>
              <PieChart />
            </Box>
          </Paper>

          <Paper elevation={1} sx={StylePaper}>
            <Box sx={StyleBox}>
              <h3>Tareas completadas</h3>
            </Box>
            <Box sx={StyleBoxpie}>
              <PieChart />
            </Box>
          </Paper>
        </Grid>
        
        
        <Paper elevation={1}
          sx={{
            width: 500,
            height: 200,
            mt: 6,ml:3,
            borderRadius: 10,
            backgroundColor: (theme) => (theme.palette.mode = "#f2f2f2"),
          }}
        >
          <Box
            sx={{
              height: 50,
              width: 500,
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "#1A2027"
                  : "rgb(230, 231, 232 )",
            }}
          >
            Tareas Nuevas
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
