import * as React from "react";
import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export default function Module() {
  
  return (
    <Grid sx={{ flexGrow: 1 }} spacing={2} >
      <Grid item xs={12}>
        <Grid container justifyContent="center" >
          {[0, 1, 2].map((value) => (
            <Grid key={value} item spacing={2} >
              <Paper
                sx={{
                  height: 200,
                  width: 300,
                  borderRadius:10,
                  backgroundColor: (theme) =>
                    theme.palette.mode = "#1A2027",
                }}
                
              >
                <Box sx={{
                  height: 50,
                  width: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}> 
                     
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
