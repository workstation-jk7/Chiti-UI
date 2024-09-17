import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppRoutes from './route/Route';
import { routePath } from './route/RouteConfig';
import { AppConfig } from './App.config';

import './App.css'

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      setTimeout(() => {
        const token = localStorage.getItem(AppConfig.AuthToken);
        if (token) {
           navigate(routePath.Dashboard);
        } else {
           navigate(routePath.Login);
        }
        setLoading(false);
      }, AppConfig.SplashDuration); // Splash screen duration
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return (
      <div className="welcome-container">
        <img src="../images/chiti-vertical-logo.svg"/>
      </div>
    );
  }

  return <AppRoutes />;
};

export default App;
