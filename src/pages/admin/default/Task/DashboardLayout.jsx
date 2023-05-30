import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Box } from "@mui/material";
import ModuleTask  from "@/container/AdminContainer/ModuleTask";


function DashboardLayout() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <ModuleTask />
      </Box>
    </>
  );
}

export default DashboardLayout;
