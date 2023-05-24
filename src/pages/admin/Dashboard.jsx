import React from "react";

import Appheader from "../../components/menu/Appheader";

import { Box } from "@mui/material";
import DashboardLayout from "../../container/HomeContainer/DashboardLayout";
function Dashboard() {
  return (
    <>
      <Box>
        <Appheader />
        <DashboardLayout/>
      </Box>
    </>
  );
}

export default Dashboard;
