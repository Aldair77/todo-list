'use client'
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
import { useForm } from 'react-hook-form';
import { baseUrl } from './config';
import axios from 'axios';
import { saveLogin } from './localStorage';
import { LoadingButton } from '@mui/lab';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/router';

function LoginLayout() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginError, setShowLoginError] = useState('');
  const navigate = useRouter();

  const handleClose = () => {
    setIsOpen(false);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);
    axios
      .post(`${baseUrl()}/users/login/`, data)
      .then((response) => {
        saveLogin(response.data.data);
        navigate('/new-reports');
         console.log('data',data)
        setIsSubmitting(false);
      })
      .catch((data) => {
        setShowLoginError(data.response.data.errors[0]);
       
        setIsOpen(true);
        setIsSubmitting(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 0, width: 96, height: 96, backgroundColor: 'transparent' }} variant="square">
          <img src="" alt="ORBITEC" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuario"
            name="username"
            autoComplete="off"
            autoFocus
            {...register('username', {
              required: 'Usuario requerido',
              minLength: {
                value: 4,
                message: 'El usuario debe tener 4 caracteres como minimo',
              },
            })}
            error={errors.username && true}
            helperText={errors.username && errors.username.message}
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
            {...register('password', {
              required: 'Clave requerida',
              minLength: {
                value: 4,
                message: 'La clave debe tener 4 caracteres como minimo',
              },
            })}
            error={errors.password && true}
            helperText={errors.password && errors.password.message}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recuerdame" />
          <LoadingButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} loading={isSubmitting}>
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
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }} elevation={6} variant="filled">
          {showLoginError}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default LoginLayout;
