import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Avatar } from "@nextui-org/react";

export default function AvatarUser() {

  //
  return (
    <>
      <Button color="inherit" >
        <Box sx={{ padding: 0 }}>
          <Avatar
            css={{ size: "$20" }}
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          ></Avatar>
        </Box>
      </Button>
    </>
  );
}
