import { Navigate, Outlet } from 'react-router-dom';
import { getLoginToken } from '../Login/localStorage';

export const ProtectedRoute = ({ children = null, redirectTo = '/login' }) => {
  if (!getLoginToken()) return <Navigate to={redirectTo} />;

  return children || <Outlet />;
};
