
import UserDropdown from './UserDropdown';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Header from './Header';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HMenu from './HMenu';
  
const whiteTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
  },
});


function Appheader() {


  return (
    <>
      <ThemeProvider theme={whiteTheme}>
        <AppBar position="static" >
          
          <Box display="flex">
             <UserDropdown />

              <Header/>
          </Box>
             
          


        </AppBar>
      </ThemeProvider>
      <HMenu/>
    </>
  )
}

export default Appheader