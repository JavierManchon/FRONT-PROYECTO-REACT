import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AuthRoute({ component }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        // Si no está autenticado y ya ha terminado de cargar
        navigate('/login', { state: { prevRoute: location.pathname } });
      }
    }
  }, [isLoading, isAuthenticated, location.pathname, navigate]);

  // Si está autenticado o aún está cargando, renderiza el componente
  // Si no está autenticado y no está cargando, el useEffect ya ha manejado la redirección

  return (isAuthenticated || isLoading) ? component : null;
}

export default AuthRoute;