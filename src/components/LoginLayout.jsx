import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
/*import { useForm } from 'react-hook-form';*/
/*import { baseUrl } from '../../helper/config';*/
/*import axios from 'axios';*/
/*import { saveLogin } from '../../helper/localStorage';*/
import { LoadingButton } from '@mui/lab';
import Snackbar from '@mui/material/Snackbar';
/*import Alert from '@mui/material/Alert';*/
import supabase from '../utils/supabaseClient'



function LoginLayout() {

  const [email,setEmail] =useState(null);
  const [password,setPassword]=useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const hangleSignUp = async() =>{
    try{
      const{user ,session,error} = await supabase.auth.SignUp({
        email,
        password,
      })
      if(error) throw error
      alert ('chek tu email')
    }catch(e){
      alert(e.message)
    }
  }

  const handleClose = () => {
    setIsOpen(false);
  };



  return (
    <Container component="main" maxWidth="xs"   >
      
      <Box
        sx={{
          
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 0, width: 96, height: 96, backgroundColor: 'transparent' }} variant="square">
          <img src="" alt="" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuario"
            name="username"
            autoComplete="off"
            autoFocus
            onChange={e=>setEmail(e.target.value)}
           
           
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Clave"
            type="password"
            id="password"
            autoComplete="off"
            onChange={e=>setPassword(e.target.value)}
           
            
          />
          <FormControlLabel  control={<Checkbox value="remember" color="primary" />} label="Recuerdame" />
          <LoadingButton onClick={hangleSignUp} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 ,color:'#000'}} >
            Ingresar
          </LoadingButton>
        </Box>
      </Box>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
       
      </Snackbar>
    </Container>
  );
}

export default LoginLayout;
