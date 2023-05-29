import React from "react";
import IndexHeader from "@/components/Header/IndexHeader";
import { Box } from "@mui/material";
import DashboardLayout from "./DashboardLayout";

function Dashboard() {
  return (
    <>
      <Box>
        <IndexHeader />
        <DashboardLayout />
      </Box>
    </>
  );
}

export default Dashboard;
