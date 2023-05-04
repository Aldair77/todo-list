import { BrowserRouter } from 'react-router-dom';
import RouterPath from './RouterPath';
/*import Provider from './context/Provider';*/
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { esES } from '@mui/material/locale';
/*import { ToastContainer } from 'react-toastify';*/

function App() {
  /* inicializar propiedades de tema material desing MUI */
  const theme = useTheme();

  return (
    <>
   
      <BrowserRouter>
        <ThemeProvider theme={createTheme(theme, esES)}>
          <RouterPath />
        </ThemeProvider>
      </BrowserRouter>
      </>
      
   
  );
}

export default App;
