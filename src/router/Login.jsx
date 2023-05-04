import { Navigate } from 'react-router-dom';
/*import { getLoginToken } from '../helper/localStorage';*/
import LoginLayout from '../components/login/LoginLayout';

function Login() {
  /* validar si existe login en localstorage, si existe redireccionar a reportes 
  if (getLoginToken()) return <Navigate to={'/dashboard'} />; */

  return (
    <>
    <Navigate to={'/dashboard'} />;
    
    </>
    
  )
}
export default Login;