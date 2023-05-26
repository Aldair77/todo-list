import React from "react";
import VMenu from "./VMenu";
import Module from "./Module";
import { Box } from "@mui/material";

function DashboardLayout() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <VMenu />
        <Module />
      </Box>
    </>
  );
}

export default DashboardLayout;
