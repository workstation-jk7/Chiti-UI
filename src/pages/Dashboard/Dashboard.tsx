import React from 'react';
import Avatar from 'react-avatar';

const DashboardPage: React.FC = () => {
  const userData = JSON.parse(sessionStorage.getItem('user') as any);
  return (
    <div>
      <h1>Welcome {userData?.displayName}</h1>
      <Avatar name={userData?.displayName} src={userData?.photoURL} />
    </div>
  );
};

export default DashboardPage;
