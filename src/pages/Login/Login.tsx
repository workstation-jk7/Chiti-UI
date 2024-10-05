/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AppConfig } from '../../App.config';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { routePath } from '../../route/RouteConfig';
import { auth, provider } from '../../auth/firebase';

import './Login.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await auth.signOut();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem(AppConfig.AuthToken, (user as any)?.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        navigate(routePath.Dashboard);
      },500)
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };
  return (
    <div className='login-container'>
      <img src='/images/chiti-horizontal-logo.svg'/>
      <img src='/images/ruppee-background.svg'/>
      <div className='sign-in-control'>
        <button onClick={handleLogin}>
            <img className='google-icon' src='/images/google-logo.svg'/>
            Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
