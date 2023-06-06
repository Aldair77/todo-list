import { Navigate } from 'react-router-dom';
import { getLoginToken } from '../Login/localStorage';
import LoginLayout from '../Login/LoginLayout';

function Login() {
  /* validar si existe login en localstorage, si existe redireccionar a reportes */
  if (getLoginToken()) return <Navigate to={'/new-reports'} />;

  return <LoginLayout />;
}
export default Login;
