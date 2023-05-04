import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Root() {
  /* utilizar redireccion al cargar componente (render) */
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, []);

  return <Outlet />;
}

export default Root;