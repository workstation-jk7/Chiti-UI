import React from 'react';
import LoginPage from '../pages/Login/Login';
import ProfilePage from '../pages/Profile/Profile';
import NotificationPage from '@/pages/Notification/Notification';
import DashboardLayout from '@/pages/DashboardLayout/DashboardLayout';
import HomePage from '@/pages/Home/Home';

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
    Notification: withPrefix('/notification'),
}

const routesConfig: RouteConfig[] = [
  {
    path: routePath.Dashboard,
    element: (
      <DashboardLayout>
        <HomePage/>
      </DashboardLayout>
    ),
    isPublic: false,
  },
  {
    path: routePath.Login,
    element: <LoginPage />,
    isPublic: true,
  },
  {
    path: routePath.Profile,
    element: (
      <DashboardLayout>
        <ProfilePage/>
      </DashboardLayout>
    ),
    isPublic: false,
  },
  {
    path: routePath.Notification,
    element: (
      <DashboardLayout>
        <NotificationPage/>
      </DashboardLayout>
    ),
    isPublic: false
  }
];

export default routesConfig;
