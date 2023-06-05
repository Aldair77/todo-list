import { forwardRef, useState } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserDropdown() {
  /*const { replaceContent } = useAppContext();*/
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [opens, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useRouter();

  const handleLogout = () => {
    clearMenus();
    removeLogin();
    navigate("/login");
    handleCloses();
    /*replaceContent(<Welcome />);*/
  };

  const handleCloses = () => {
    setOpen(false);
  };

  const imageLoader = () => {
    return " ";
  };
  //
  return (
    <>
      <Button
        color="inherit"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        size="medium"
      >
        <Box sx={{ padding: 4 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              marginRight: 1,
              backgroundColor: "rgb(255,255,255)",
            }}
            variant="circular"
          >
            <Image
              loader={imageLoader}
              src="me.png"
              alt="Picture of the author"
              width={80}
              height={80}
              priority={true}
            />
          </Avatar>
        </Box>
        <Stack alignItems="start">
          {/*<Typography variant="body2">{`${userData.first_name} ${userData.last_name}`.trim()}</Typography>*/}
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            style={{ textTransform: "none", color: "lightgray" }}
          >
            {/*userData.username*/}
          </Typography>
        </Stack>
      </Button>
      {/** Boton de desconectar */}
      {/** 
       * <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
       * 
       * <MenuItem onClick={handleClickOpen} disableRipple>
          <ReportIcon />
          Desconectar
        </MenuItem>
       *   </StyledMenu>
       */}

      <Dialog
        open={opens}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloses}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Cerrar sesión"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Al cerrar sesion no podras utilizar el sistema hasta volver a
            ingresar.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="success" variant="contained" onClick={handleCloses}>
            Cerrar
          </Button>
          <Button color="error" variant="contained" onClick={handleLogout}>
            Salir del sistema
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
