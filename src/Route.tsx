import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import routesConfig from './RouteConfig';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routesConfig.map((route, index) => {
        const element = route.isPublic ? (
          route.element
        ) : (
          <PrivateRoute>{route.element}</PrivateRoute>
        );

        return (
          <Route
            key={index}
            path={route.path}
            element={element}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;

