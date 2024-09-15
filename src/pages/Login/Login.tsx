import React from 'react';
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
      // The signed-in user info
      const user = result.user;
      sessionStorage.setItem('user', JSON.stringify(user));
      //alert(user?.displayName);
      setTimeout(() => {
        navigate(routePath.Dashboard);
      },500)
      // You can redirect the user to the dashboard here
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
