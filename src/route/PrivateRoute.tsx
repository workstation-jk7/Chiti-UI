import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = sessionStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
