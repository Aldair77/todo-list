import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#1A2027" : "rgb(230, 231, 232 )",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  textAlign: "center",
  alignItems: "center",
  justifyContent: "left",
  display: "flex",
  color: theme.palette.text.secondary,
  "@media all": {
    minHeight: 60,
  },
}));

export default function Header() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} padding={1}>
        <Item elevation={0}>
          <h2>..</h2>
        </Item>
      </Stack>
    </Box>
  );
}
