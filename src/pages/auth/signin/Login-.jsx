
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Snackbar from "@mui/material/Snackbar";
/*import Alert from '@mui/material/Alert';*/
import { supabase } from "../../../utils/supabaseClient";
import Link from "@mui/material/Link";
import Home from "@/pages";


import { Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./Auth";

function Login() {
 /* const [email, setEmail] = useState("");
  /*const [password, setPassword] = useState("");*/ /*
  const [isSignUp, setIsSignUp] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const hangleSignUp = async () => {
    /* registro */ /*
    try {
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      alert("Se envío un correo de confirmacion");
    } catch (e) {
      alert(e.message);
    }
  };

  const hangleSignIn = async () => {
    try {
      const { user, session, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      /*if(error) throw error*/ /*
      alert("Usuario Logueado");
    } catch (e) {
      alert(e.message);
    }
  };

  const changeForm = () => {
    setIsSignUp((value) => !value);
  };
 */


/********************************************************/


const [isLoggedIn, setLoggedIn] = useState(false);
const [isError, setIsError] = useState(false);
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const  setAuthTokens  = useAuth();
const referer = <Home/>

function postLogin() {
  axios
    .post("https://reqres.in/api/login", {
      email: userName,
      password
    })
    .then((result) => {
      console.log("result", result);
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
        console.log(result.data);
      } else {
        setIsError(true);
      }
    })
    .catch((e) => {
      setIsError(true);
      console.log(e);
    });
}

if (isLoggedIn) {
  return <Redirect to={referer} />;
}



/*************************************/

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 0, width: 96, height: 96, backgroundColor: "transparent" }}
          variant="square"
        >
          <img src="" alt="" />
        </Avatar>
        <Typography component="h1" variant="h5">
          {/* isSignUp ? "Registrarse" : "Ingresar" */}
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
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          {/* isSignUp && (
            <LoadingButton
              onClick={hangleSignUp}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: "#000" }}
            >
              Registrar
            </LoadingButton>
          )*/}

          {/*!isSignUp && */(
            <LoadingButton
              onClick={postLogin}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: "#000" }}
            >
              Ingresar
            </LoadingButton>
          )}
        </Box>
       { /* <Link href="#" onClick={changeForm} underline="always">
          {isSignUp 
            ? "Ya tienes una cuenta? ¡Ingresa!"
          : "No tienes una cuenta? ¡Registrate!" }
        </Link>*/ }
      </Box>
    </Container>
  );
}

export default Login;
