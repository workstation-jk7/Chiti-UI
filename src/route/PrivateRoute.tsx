import React from 'react';
import { Navigate } from 'react-router-dom';

import { AppConfig } from '../App.config';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = sessionStorage.getItem(AppConfig.AuthToken);
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
