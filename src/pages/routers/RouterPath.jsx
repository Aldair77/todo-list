import { Route, Routes } from 'react-router-dom';
import ReportsLayout from '../admin/default/Home';
import LoginAs from './LoginAs';
import Root from './Root';
import { ProtectedRoute } from './ProtectedRoute';
import Login from './Login';
import Error404 from './Error404';

const RouterPath = () => {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginas/:token" element={<LoginAs />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/new-reports" element={<ReportsLayout />} />
      </Route>
    </Routes>
  );
};

export default RouterPath;
