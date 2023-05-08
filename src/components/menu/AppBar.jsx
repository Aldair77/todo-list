import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import UserDropdown from './UserDropdown';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Header from './Header';

  
function AppBar() {

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 128,
    },
  }));




  return (
    <>
        <AppBar  >
          
              
            <StyledToolbar>
              <UserDropdown />

              <Header/>
              
            </StyledToolbar>
        </AppBar>

    </>
  )
}

export default AppBar