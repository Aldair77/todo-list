import { forwardRef, useState } from 'react';
// import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';  / -- Ocultar el boton de desconectar
import { useRouter } from 'next/router';
import { getUserData, removeLogin } from '../../helper/localStorage';
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
} from '@mui/material';
// import ReportIcon from '@mui/icons-material/Report';
import { clearMenus } from '../../helper/sessionStorage';
/*import { useAppContext } from '../../context/Provider';
import Welcome from '../../pages/reports/Welcome';*/

/* const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));
*/
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
  /* const handleClose = () => {
    setAnchorEl(null);
  }; */

  const navigate = useRouter(); 

   /*const userData = getUserData(); */

  const handleLogout = () => {
    clearMenus();
    removeLogin();
    navigate('/login');
    handleCloses();
   /*replaceContent(<Welcome />);*/
  };

  /* const handleClickOpen = () => {
    setOpen(true);
    handleClose();
  }; */
  const handleCloses = () => {
    setOpen(false);
  };

  //
  return (
    <>
      <Button
        color="inherit"
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        size="medium"
      >
        <Box sx={{padding:2}}>
          <Avatar sx={{ width: 40, height: 40, marginRight: 1, backgroundColor: 'rgb(255,255,255)' }} variant="circular">
            <img
              src={'https://app.orbitec.pe/img/logo.7d1fa44a.png'}
              alt="Avatar"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Avatar>
        </Box>  
        <Stack alignItems="start">
          {/*<Typography variant="body2">{`${userData.first_name} ${userData.last_name}`.trim()}</Typography>*/}
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            style={{ textTransform: 'none', color: 'lightgray' }}
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
        <DialogTitle>{'Cerrar sesión'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Al cerrar sesion no podras utilizar el sistema hasta volver a ingresar.
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
