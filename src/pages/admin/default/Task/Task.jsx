import DashboardLayout from "./DashboardLayout";
import IndexHeader from "@/components/Header/IndexHeader";
import { Box } from "@mui/material";

function Task() {
  /* Page de tareas */
  return (
    <>
      <Box>
        <IndexHeader />
        <DashboardLayout />
      </Box>
    </>
  );
}

export default Task;
