import React from 'react';
import { auth, provider } from '../../auth/firebase';
import { signInWithPopup } from 'firebase/auth';

import './Login.css';

const LoginPage: React.FC = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info
      const user = result.user;
      console.log('User:', user);
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
            Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
