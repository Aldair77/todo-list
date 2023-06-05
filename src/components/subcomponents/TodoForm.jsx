import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Box, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
      </DialogTitle>
    );
  }

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  return (
    <>
      <Button onClick={handleClickOpen}>
        <AddBoxIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          Usuario
        </BootstrapDialogTitle>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
          component="form"
          onSubmit={handleSubmit}
        >
          <DialogContent dividers>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              label="Ingresar Tarea"
              id="outlined-multiline-static"
              fullWidth
              multiline
              rows={4}
            />
            <DialogActions sx={{ m: 1, justifyContent: "left" }}>
              <Button variant="contained" component='label'>
                Subir
                <input hidden accept='image/*'multiple type='file' />
              </Button>
              <IconButton color='primary' aria-label="upload picture" component='label'>
                <input hidden accept='image/*' type='file'/>
                <PhotoCameraIcon/>
              </IconButton>
            </DialogActions>
            <DialogActions sx={{ m: 1, justifyContent: "center" }}>
              <Button type="submit" variant="contained">
                Enviar
              </Button>
              <Button onClick={handleClose}>Cancelar</Button>
            </DialogActions>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};
