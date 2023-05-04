import { Route, Routes } from 'react-router-dom';
/*import ReportsLayout from '../pages/reports/ReportsLayout';*/
/*import LoginAs from './LoginAs'; */
import Root from './Root';
/*import { ProtectedRoute } from './ProtectedRoute';*/
import Login from './Login';
import Error404 from './Error404';

const RouterPath = () => {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
  );
};

export default RouterPath;