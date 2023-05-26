import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Cardx() {
  const StyleBox = {
    height: 100,
    width: 150,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "20px",
    mr: 2,
    backgroundColor: (theme) =>
      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  };
  const StyleBox2 = {
    height: 50,
    width: 250,
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <>
      <Container  sx={{display:'flex',justifyContent:'center',mt:5}}>
        <Card sx={{ maxWidth: 300, borderRadius: "20px" ,mr: 2}}>
          <CardContent
            sx={{ bgcolor: "rgb(230, 231, 232 )", alignContent: "center" }}
          >
            <Box sx={StyleBox2}>
              <Typography gutterBottom variant="h6">
                Tareas en Total
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={StyleBox}></Box>
              <Box sx={StyleBox}></Box>
            </Box>
            <Box sx={StyleBox2}>
           
                Historial
             
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 300, borderRadius: "20px" ,mr: 2}}>
          <CardContent
            sx={{ bgcolor: "rgb(230, 231, 232 )", alignContent: "center" }}
          >
            <Box sx={StyleBox2}>
              <Typography gutterBottom variant="h6">
                Tareas en Total
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={StyleBox}></Box>
              <Box sx={StyleBox}></Box>
            </Box>
            <Box sx={StyleBox2}>
           
                Historial
             
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 300, borderRadius: "20px" ,mr: 2}}>
          <CardContent
            sx={{ bgcolor: "rgb(230, 231, 232 )", alignContent: "center" }}
          >
            <Box sx={StyleBox2}>
              <Typography gutterBottom variant="h6">
                Tareas en Total
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={StyleBox}></Box>
              <Box sx={StyleBox}></Box>
            </Box>
            <Box sx={StyleBox2}>
              
                Historial
             
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 300, borderRadius: "20px" }}>
          <CardContent
            sx={{ bgcolor: "rgb(230, 231, 232 )", alignContent: "center" }}
          >
            <Box sx={StyleBox2}>
              <Typography gutterBottom variant="h6">
                Tareas en Total
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={StyleBox}></Box>
              <Box sx={StyleBox}></Box>
            </Box>
            <Box sx={StyleBox2}>
              
                Historial
              
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
