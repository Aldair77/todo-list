import axios from 'axios';
import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../Login/config';
import { saveLogin } from '../Login/localStorage';

function LoginAs() {
  const navigate = useNavigate();
  const { token } = useParams();

  /* cargar funciones al renderizar componente */
  useEffect(() => {
    axios
      .post(`${baseUrl()}/users/login_as/`, {
        token,
      })
      .then((response) => {
        saveLogin(response.data.data); // -- guardar datos a localstorage
        navigate('/new-reports');
      })
      .catch(() => {
        navigate('/login');
      });
  }, []);

  return <Outlet />;
}

export default LoginAs;
