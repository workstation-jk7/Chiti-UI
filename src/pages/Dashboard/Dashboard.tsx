import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import BottomNav from '../BottomNav/BottomNav';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Header></Header>
      {/* <Navigation></Navigation> */}
      <BottomNav></BottomNav>
    </div>
  );
};

export default DashboardPage;

