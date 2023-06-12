import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@nextui-org/react";


export default function Sidebar() {

  return (
    <Box sx={{ display: "flex",paddingTop:1,paddingLeft:1 }}>
        <Button.Group size="xl" vertical color="gradient" bordered ghost>
        
        <Button> Soporte </Button>
        <Button>Backend</Button>
        <Button>Frontend</Button>
        <Button>Area de diseño</Button>
        <Button> Soporte </Button>
        <Button>Frontend</Button>
        <Button>Area de diseño</Button>
        
      </Button.Group>
     
      
    </Box>
  );
}
