import React from 'react';
import DashboardPage from '../pages/Dashboard/Dashboard';
import ProfilePage from '../pages/Profile/Profile';
import LoginPage from '../pages/Login/Login';

const ROUTE_PREFIX = '/app';

const withPrefix = (path: string): string => {
  return `${ROUTE_PREFIX}${path}`;
};


interface RouteConfig {
  path: string;
  element: React.ReactElement;
  isPublic: boolean;
}

export const routePath = {
    Dashboard: withPrefix('/dashboard'),
    Login: '/login',
    Profile: withPrefix('/profile'),
}

const routesConfig: RouteConfig[] = [
  {
    path: routePath.Dashboard,
    element: <DashboardPage />,
    isPublic: false,
  },
  {
    path: routePath.Login,
    element: <LoginPage />,
    isPublic: true,
  },
  {
    path: routePath.Profile,
    element: <ProfilePage />,
    isPublic: false,
  },
];

export default routesConfig;
