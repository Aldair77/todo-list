import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import PieChart from "@/components/chartjs/PieChart";
import Cardx from "./Cardx";
import BarChart from "@/components/chartjs/BarChart";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

export default function Module() {
  const StyleBox = {
    height: 50,
    width: 300,
    paddingTop: (1.5), 
    paddingBottom: (1.5),
    textAlign: "center",
    alignItems: "center",
    backgroundColor: (theme) =>
      theme.palette.mode === "dark" ? "#1A2027" : "rgb(230, 231, 232 )",
  };

  const StyleBoxpie = {
    position: "center",
    width: 300,
    height: 150,
    pb: 1,
  };

  const StylePaper = {
    height: 200,
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    mr: 6,
    backgroundColor: (theme) => (theme.palette.mode = "#f2f2f2"),
  };

  const StyledAvatar = styled(Box)`
  ${({ theme }) => `

  
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    
    transform: scale(1.1);
  }
  `}
`;

  return (
    <Grid sx={{ flexGrow: 1, display: "flex",mt:3 }}>
      <Grid gap={1} sx={{ justifyContent: "center", width: 1300 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          gap={3}
          sx={{ justifyContent: "center", width: "100vh" }}
        >
          <Link href="/admin/default/Task/Task">
            <Paper elevation={1} sx={StylePaper}>
              <Box sx={StyleBox}>
                <Typography gutterBottom variant="h6">Tareas en Total</Typography> 
              </Box>
              <Box sx={StyleBoxpie}>
                <PieChart m={0} />
                
              </Box>
            </Paper>
          </Link>

          <Paper elevation={1} sx={StylePaper}>
            <Box sx={StyleBox}>
            <Typography gutterBottom variant="h6">Tareas en Pendientes</Typography> 
            </Box>
            <Box sx={StyleBoxpie}>
              <PieChart />
            </Box>
          </Paper>

          <Paper elevation={1} sx={StylePaper}>
            <Box sx={StyleBox}>
            <Typography gutterBottom variant="h6">Tareas en Completadas</Typography> 
            </Box>
            <Box sx={StyleBoxpie}>
              <PieChart />
            </Box>
          </Paper>
        </Grid>

        {/* <Paper elevation={1}
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
          </Paper>*/}
        <Cardx />
        <Container
          sx={{
            width: 1200,
            height: 200,
            justifyContent: "center",
            display: "center",
            mt: 5,
          }}
        >
          <Box sx={{ width: 1100, height: 200 }}>
            <BarChart />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
