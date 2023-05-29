import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Module from "@/container/AdminContainer/Module";
import { Box } from "@mui/material";

function DashboardLayout() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Module />
      </Box>
    </>
  );
}

export default DashboardLayout;
